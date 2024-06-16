import express from "express";
import path from "path";
import mongoose from 'mongoose'
import router from './routes/user-routes.js';
import blogRouter from "./routes/blog-routes.js";
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI).then(() => { console.log('Connected to Mongo DB') })
  .catch((error) => console.log(error.message))

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
});

