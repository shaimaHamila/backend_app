import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { appDataSource } from "./config/Database";
import PostRouter from "./routes/PostRouter";
import authRouter from "./routes/AuthRouter";

// establish database connection
appDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })



//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/auth', authRouter)
app.use('/post', PostRouter)
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express & TypeScript Server");
});
// app.use("/api/v1/auth", authRouter)
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
