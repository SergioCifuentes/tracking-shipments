import { createConnection } from "typeorm";

// Use Enviroment Variables
import dotenv from "dotenv";
import { Pool } from "pg";
import { Shipment } from "../models/Shipment"
import { ShipmentHistory } from "../models/ShipmentHistory"
dotenv.config()

const connectDB = async () => {
    createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        entities: [Shipment,ShipmentHistory],
        migrations: ["./src/models/*.ts"],
        ssl: false,
        extra: {
            ssl: {
                "rejectUnauthorized": false
            }
        }
    })

}

// const connectDB = new Pool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: parseInt(process.env.DB_PORT || "5432")
//   });
export default connectDB;