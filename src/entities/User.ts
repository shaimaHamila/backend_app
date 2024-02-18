import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

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
    cin: string;

    @Column()
    roles: string;

    // Add other properties as needed

    @Column({ nullable: false })
    password: string;
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
