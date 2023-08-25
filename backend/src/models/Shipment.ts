import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Status } from './Status';
import { ShipmentHistory } from './ShipmentHistory';

//import * as bcrypt from 'bcrypt';

@Entity()
export class Shipment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100})
    description: string;

    @Column({type: 'varchar', length: 50})
    destination: string;

    @Column({type: 'varchar', length: 50})
    source: string;

    @Column('int')
    status: Status

    @OneToMany(() => ShipmentHistory, (shipmentHistory) => shipmentHistory.shipment
    , {
        eager: true,
    }) // note: we will create author property in the Photo class below
    history: ShipmentHistory[]

    // model methods
}