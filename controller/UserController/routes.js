import express from "express";
import {getAllUser,getSingleUser,saveUser,deleteUser} from "./UserController.js";

export const userRoutes = express
  .Router()
  .get("/users",getAllUser)
  .get("/users/:id", getSingleUser)
  .post("/users", saveUser)
  .delete("/users/:id",deleteUser);