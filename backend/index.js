import express, { request, response } from "express";
import { PORT, dBURL } from "./config.js";
import mongoose from "mongoose";
import { Blog } from "./models/blogModel.js";
import blogRoutes from "./routes/blogRoutes.js"
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors(
//     {
//         origin: 'http://localhost:5500',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-type'],
//     }
// ));

app.use('/', blogRoutes);

app.get('/', (request, response) => {
    return response.status(280).send('Hello from the app')
});


mongoose
    .connect(dBURL)
    .then(() => {
        console.log('db connection established');
        app.listen(PORT, () => {
            console.log('app running');
        });
    })
    .catch((error) => {
        console.log(error);
    })
