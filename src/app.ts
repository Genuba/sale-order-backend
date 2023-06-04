import express from "express";

import saleOrderItemRouter from "./routes/saleOrderItem";
import saleOrderRouter from "./routes/saleOrder";
import connection from "./db/config";

import { json, urlencoded } from "body-parser";
import { initProduct, initSaleOrder, initSaleOrderItem } from "./db/init";
import { Product } from "./models/product";
import { SaleOrder } from "./models/saleOrder";
import { SaleOrderItem } from "./models/saleOrderItem";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = 3000;

app.use("/saleOrderItem", saleOrderItemRouter);
app.use("/saleOrder", saleOrderRouter);

connection
  .sync({ force: true })
  .then(async () => {
    console.log("Database synced successfully");
    await initProduct.map(async (x) => await Product.create(x));
    await initSaleOrder.map(async (x) => await SaleOrder.create(x));
    await initSaleOrderItem.map(async (x) => await SaleOrderItem.create(x));
    console.log("Init data synced successfully");
  })
  .catch((err) => {
    console.log("Err", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
