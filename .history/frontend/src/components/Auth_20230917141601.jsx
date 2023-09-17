// import React, { useState } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import { authActions } from '../store';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import  useStyles  from "./utils";
// import { toast } from 'react-toastify';
// import { getError } from '../errors.js';


// const Auth = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const dispath = useDispatch();
//   const [inputs, setInputs] = useState({
//    name: "",
//     email: "",
//     password: "",
//   });
  
//   const [isSignUp, setIsSignUp] = useState(false);

//   const [error, setError] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
  
  
//   const sendRequest = async (type = "login") => {
//     const res = await axios.post(`http://localhost:5050/api/user/${type}`, {
//         name: inputs.name,
//         email: inputs.email,
//         password: inputs.password,
//       })
//      .catch (error) {
//         toast.error(getError(error));
//         setSuccess("");
//       }
//     const data = await res.data;
//     return data;
//   };
  

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     if (isSignUp) {
   
//       sendRequest("signup").then((data)=>localStorage.setItem('userId', data.user._id))
//         .then(() => dispath(authActions.login()))
//         .then(() => navigate("/blogs"))
//         .then((data) => console.log(data));
//     } else {
//       sendRequest()
//       .then((data)=>localStorage.setItem('userId', data.user._id))
//         .then(() => dispath(authActions.login()))
//         .then(() => navigate("/blogs"))
//         .then((data) => console.log(data));
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           maxWidth={400}
//           display="flex"
//           flexDirection={"column"}
//           alignItems="center"
//           justifyContent={"center"}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin="auto"
//           marginTop={5}
//           borderRadius={5}
//         >
//           <Typography className={classes.font } variant="h2" padding={3} textAlign="center">
//             {isSignUp ? "Signup" : "LogIn"}
//           </Typography>
//           {isSignUp && (
//             <TextField
//             className={classes.font }
//               name="name"
//               onChange={handleChange}
//               margin="normal"
//               value={inputs.name}
//               placeholder="Name"
//             />
//           )}
//           <TextField
//             className={classes.font }
//             name="email"
//             onChange={handleChange}
//             margin="normal"
//             value={inputs.email}
//             placeholder="Email"
//             type={"email"}
//           />
//           <TextField
//             className={classes.font }
//             name="password"
//             onChange={handleChange}
//             margin="normal"
//             value={inputs.password}
//             placeholder="Password"
//             type={"password"}
//           />
//           <Button
//             className={classes.font }
//             type="submit"
//             variant="contained"
//             sx={{ borderRadius: 3, marginTop: 3 ,fontSize: "10px"}}
//             color="success"
//           >
//             Submit
//           </Button>
//           <Button
//             className={classes.font }
//             sx={{ borderRadius: 3, marginTop: 3, fontSize: "10px" }}
//             color="primary"
//             onClick={(e) => setIsSignUp(!isSignUp)}
//           >
//             Change to {isSignUp ? "LogIn" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default Auth;
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { authActions } from '../store';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import useStyles from "./utils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getError}


const Auth = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSignUp) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const type = isSignUp ? "signup" : "login";
      const res = await axios.post(`http://localhost:5050/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });

      const data = res.data;
      localStorage.setItem('userId', data.user._id);
      dispatch(authActions.login());
      navigate("/blogs");
    } catch (error) {
      toast.error(getError(error));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography className={classes.font} variant="h2" padding={3} textAlign="center">
            {isSignUp ? "Signup" : "LogIn"}
          </Typography>
          {isSignUp && (
            <TextField
              className={classes.font}
              name="name"
              onChange={handleChange}
              margin="normal"
              value={inputs.name}
              placeholder="Name"
            />
          )}
          <TextField
            className={classes.font}
            name="email"
            onChange={handleChange}
            margin="normal"
            value={inputs.email}
            placeholder="Email"
            type={"email"}
          />
          <TextField
            className={classes.font}
            name="password"
            onChange={handleChange}
            margin="normal"
            value={inputs.password}
            placeholder="Password"
            type={"password"}
          />
          <Button
            className={classes.font}
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3, fontSize: "10px" }}
            color="success"
          >
            Submit
          </Button>
          <Button
            className={classes.font}
            sx={{ borderRadius: 3, marginTop: 3, fontSize: "10px" }}
            color="primary"
            onClick={(e) => setIsSignUp(!isSignUp)}
          >
            Change to {isSignUp ? "LogIn" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;

