import express from "express";

import usersRouter from "./routes/saleOrderItem";
import connection from "./db/config";

import {json, urlencoded} from "body-parser";

const app = express();
app.use(json());
app.use(urlencoded({extended:true}));

const PORT = 3000;

app.use("/saleOrderItem", usersRouter);

connection.sync().then(()=>{
  console.log("Database synced successfully");
}).catch((err) => {
  console.log("Err",err);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

