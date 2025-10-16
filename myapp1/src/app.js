import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Api v0.5.0");
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);

export default app;
