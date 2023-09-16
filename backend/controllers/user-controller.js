import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET;

export const getAllUsers = async (req, res, next) => {

        let users;
        try {
            users = await User.find();
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (!users) {
            return res.status(404).json({ message: 'No users found.' });
        }

        return res.status(200).json({ users });
    }


export const signup = async (req, res, next) => {
    const { name, email, password, role } = req.body; 
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err);
    }

    if (existingUser) {
        return res.status(400).json({ message: "User already exists! Please login." });
    }

    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        role,
        blogs: []
    });

    try {
        await user.save();

       
        const token = jwt.sign(
            { userId: user.id, email: user.email },
           JWT_SECRET,
            { expiresIn: '1h' } 
        );


        
        return res.status(201).json({ user, token });
    } catch (err) {
        console.log(err);
    }
};


export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email  });
    } catch (err) {
        console.log(err);
    }

    if (!existingUser) {
        return res.status(404).json({ message: "Could not find a user with this email" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect password" });
    }


    const token = jwt.sign(
        { userId: existingUser._id, email: existingUser.email },
        JWT_SECRET,
        { expiresIn: '1h' } 
    );
    
    return res.status(200).json({ message: "Login is successful!", token, user: existingUser  });
};

