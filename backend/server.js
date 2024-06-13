import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import myrouter from "./routes/booksRoute.js";
import cors from 'cors';

const app =express();

app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );



app.use('/books',myrouter);

mongoose.connect(mongoDBURL).then(()=>{
   console.log('App is connected with database');
   app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
});
