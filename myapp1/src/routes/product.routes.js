import express from "express";
import {
  getProducts,
  postProduct,
  search,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", postProduct);
router.get("/search", search);

export default router;
