import express from "express";
import {
  getProducts,
  postProduct,
  search,
  deleteProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", postProduct);
router.get("/search", search);
router.delete("/:id", deleteProduct);

export default router;
