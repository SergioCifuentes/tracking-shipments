import express, { Request, Response } from "express";
import { Shipment } from "../models/Shipment";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    await Shipment.find().then((data) => {
        res.json(data);
    })
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const shipmentData = req.body;
        const shipment = new Shipment();
        shipment.DESCRIPTION = shipmentData.description;
        shipment.DESTINATION = shipmentData.destination;
        shipment.SOURCE = shipmentData.source;
        shipment.STATUS = shipmentData.status;

        await Shipment.insert(shipment);

        res.json({
            message: "Values have been inserted successfuly."
        });
    } catch (error) {
        throw error;
    }
})


export default router;