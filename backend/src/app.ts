//import express, { NextFunction, Request, Response } from "express";
//import dotenv from "dotenv";
import { Pool } from "pg";

import { createConnection, Connection } from 'typeorm';
import express from "express";
import { Request, Response } from "express"
import { Shipment } from "./models/Shipment"


import connectDB from "./config/ormconfig";

// Import API Routes
import shipmentRoutes from "./routes/shipmentRoutes";

// Use Enviroment Variables
import dotenv from "dotenv";
dotenv.config()

const app = express();

// Parse JSON 
app.use(express.json());

// Create connection with database
connectDB();

// Fetching API from the routes
app.use("/shipments", shipmentRoutes);

const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})