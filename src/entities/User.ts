import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    identifier: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    fatherName: string;

    @Column()
    grandFatherName: string;

    @Column()
    motherFirstName: string;

    @Column()
    motherLastName: string;

    @Column()
    birthday: Date;

    @Column()
    birthPlace: string;

    @Column()
    phoneNumber: string;

    @Column()
    fatherPhoneNumber: string;

    @Column()
    motherPhoneNumber: string;

    @Column()
    gender: string;

    @Column()
    cin: string;

    @Column()
    doc: string;
    // Add other properties as needed

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
