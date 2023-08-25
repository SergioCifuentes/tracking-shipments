import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Status } from './Status';
//import * as bcrypt from 'bcrypt';

@Entity()
export class Shipment extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({type: 'varchar', length: 100})
    DESCRIPTION: string;

    @Column({type: 'varchar', length: 50})
    DESTINATION: string;

    @Column({type: 'varchar', length: 50})
    SOURCE: string;

    @Column('int')
    STATUS: Status



    // model methods
}