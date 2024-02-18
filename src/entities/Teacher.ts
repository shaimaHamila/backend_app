import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "teacher" })
export class Teacher {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    code: string;

    @Column()
    phoneNumber: string;

    @Column()
    paasword: string;

    @Column()
    koteb: string;

    @Column()
    prim: string;

    @Column()
    type: string;

    @Column()
    statue: string;
}
