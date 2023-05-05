import express from "express";
import {loginUser, registerUser} from "../AuthController/AuthController.js"
export const authRoutes = express
.Router()
.post("/login",loginUser)
.post("/register", registerUser)