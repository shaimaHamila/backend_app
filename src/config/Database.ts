import { DataSource } from "typeorm";
import "reflect-metadata";
export const appDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "AssociationCoranique",
    entities: ["./entities/*.ts"],
    synchronize: true, // Set this to false
    logging: false,
});
