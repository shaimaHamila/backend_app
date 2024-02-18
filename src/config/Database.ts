import { DataSource } from "typeorm";
import "reflect-metadata";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, NODE_ENV } = process.env;
export const appDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST || "localhost",
    port: parseInt(DB_PORT || "3306"),
    username: DB_USER || "root",
    password: DB_PASSWORD || "",
    database: DB_NAME || "AssociationCoranique",
    entities: ["src/entities/*.ts"],
    synchronize: NODE_ENV === "dev" ? false : false,
    // synchronize: true,
    //logging logs sql command on the treminal
    logging: NODE_ENV === "dev" ? false : false,
    subscribers: [],
});
