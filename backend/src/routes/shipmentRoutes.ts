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
router.get("/:id", async (req: Request, res: Response) => {
    const shipment = await Shipment.findOneBy({ID: +req.params.id})
    if (shipment) {
        res.json(shipment)
    } 
    else {
        res.json({
            message: "Shipment not found."
        })
    }
})

router.put("/:id", async (req: Request, res: Response) => {
    const shipment = await Shipment.findOneBy({ID: +req.params.id});

    if (shipment) {
        const shipmentData = req.body;
        if(shipmentData.description) shipment.DESCRIPTION = shipmentData.description;
        if(shipmentData.destination) shipment.DESTINATION = shipmentData.destination;
        if(shipmentData.source) shipment.SOURCE = shipmentData.source;
        if(shipmentData.status) shipment.STATUS = shipmentData.status;
        Shipment.save(shipment);
       
        res.json({
            message: "Values updated successfully."
        })
    } 
    else {
        res.json({
            message: "Shipment not found."
        })
    }
})

router.delete("/:id", async (req: Request, res: Response) => {
    const shipment = await Shipment.findOneBy({ID: +req.params.id})

    if (shipment) {
        Shipment.delete(req.params.id);
        res.json({
            message: "Shipment Deleted."
        })
    } 
    else {
        res.json({
            message: "Shipment not found."
        })
    }
})

export default router;