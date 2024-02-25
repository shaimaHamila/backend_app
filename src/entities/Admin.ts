import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "admin" })
export class Admin {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: ["admin", "user"],
        default: "user",
    })
    role: "admin" | "user";
}
