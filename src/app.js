import "dotenv/config";
import express from "express";
import { startDatabase } from "./database";
import productsRouter from "./routes/products.routes";
import categoriesRouter from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

export default app.listen(process.env.port || 3333, () => {
  startDatabase();
  console.log("Server running");
});
