import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "post" })
export class Post {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    body: string;
}
