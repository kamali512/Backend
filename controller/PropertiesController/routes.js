import express from "express";

import {getAllProperties,getSingleProperty,saveProperty,deleteProperty} from "./PropertiesController.js";

export const propertiesRoutes  = express
.Router()
.get("/properties", getAllProperties)
.get("/properties/:id",getSingleProperty)
.post("/properties",saveProperty)
.delete("/properties/:id",deleteProperty);

