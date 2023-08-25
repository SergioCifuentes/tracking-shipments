import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Status } from './Status';
import { Shipment } from './Shipment';
//import * as bcrypt from 'bcrypt';

@Entity()
export class ShipmentHistory extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Shipment, (shipment) => shipment.id)
    shipment: Shipment;  

    @Column('int')
    status: Status

    @Column({ type: 'timestamp' }) 
    date_time: Date;



    // model methods


}