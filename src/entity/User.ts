import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    get id(): number {
        return this._id;
    }
    
    set id(value: number) {
        this._id = value;
    }

    @PrimaryGeneratedColumn() private _id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
