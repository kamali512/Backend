import express from "express";
import mongoose from "mongoose";
import {authRoutes, propertiesRoutes,userRoutes} from "./routes/index.js";
const app = express()


app.use(express.json()); //to parse body in request

mongoose.connect("mongodb+srv://Kamran:Muhammad512@cluster0.h4l5q.mongodb.net/");

mongoose.connection.on("connected", () => {
    console.log("Database Connected");
});

mongoose.connection.on("error" , () => {
    console.log("Something wrong with the DB connection");
});

app.use('/',propertiesRoutes);
app.use ('/', userRoutes)
app.use("/", authRoutes);
app.listen(4000);


console.log("Server listening on port: 4000");