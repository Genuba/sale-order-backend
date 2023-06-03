import { Sequelize } from "sequelize-typescript";
import { SaleOrderItem } from "../models/saleOrderItem";

const connection = new Sequelize({
    dialect:"postgres",
    host:"localhost",
    username:"postgres",
    password:"postgres",
    database:"postgres",
    logging:false,
    models:[SaleOrderItem]
})

export default connection;