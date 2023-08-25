import express, { Request, Response } from "express";
import { Shipment } from "../models/Shipment";
import { ShipmentHistory } from "../models/ShipmentHistory";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    await Shipment.find().then((data) => {
        res.json(data);
    })
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const shipment = await Shipment.save(req.body);
        const update= new ShipmentHistory();
        update.shipment=shipment;
        update.status=shipment.status;
        update.date_time=new Date();
        ShipmentHistory.insert(update);
        res.json({
            message: "Values have been inserted successfuly."
        });
    } catch (error) {
        throw error;
    }
})
router.get("/:id", async (req: Request, res: Response) => {
    const shipment = await Shipment.findOneBy({id: +req.params.id})
    if (shipment) {
        res.json(shipment)
    } 
    else {
        res.json({
            message: "Shipment not found."
        })
    }
})
router.delete("/:id", async (req: Request, res: Response) => {
    const shipment = await Shipment.findOneBy({id: +req.params.id})

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

router.put("/:id", async (req: Request, res: Response) => {
    const shipment = await Shipment.findOneBy({id: +req.params.id});

    if (shipment) {
        const shipmentData = req.body;
        if(shipmentData.description) shipment.description = shipmentData.description;
        if(shipmentData.destination) shipment.destination = shipmentData.destination;
        if(shipmentData.source) shipment.source = shipmentData.source;
        if(shipmentData.status){
            shipment.status = shipmentData.status;
        } 
        Shipment.save(shipment);
        if(shipmentData.status){
            const update= new ShipmentHistory();
            update.shipment=shipment;
            update.status=shipmentData.status;
            update.date_time=new Date();
            ShipmentHistory.insert(update);
        } 
       
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



export default router;