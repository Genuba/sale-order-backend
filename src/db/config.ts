import { Sequelize } from "sequelize-typescript";
import { SaleOrderItem } from "../models/saleOrderItem";
import { SaleOrder } from "../models/saleOrder";
import { Product } from "../models/product";
import { initProduct } from "./init";

const connection = new Sequelize({
    dialect:"postgres",
    host:"localhost",
    username:"postgres",
    password:"postgres",
    database:"postgres",
    logging:false,
    models:[Product,SaleOrder,SaleOrderItem],
});


export function initSync() {
    initProduct.map(async (x) => await Product.create(x));
}

export default connection;