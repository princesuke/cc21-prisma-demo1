import { findAllProduct } from "../services/product.services.js";
import {
  createProduct,
  searchProduct,
  deleteProductById,
} from "../services/product.services.js";

export async function getProducts(req, res) {
  const products = await findAllProduct();
  res.json(products);
}

export async function postProduct(req, res) {
  const data = req.body;
  const result = await createProduct(data);
  res.status(201).json(result);
}

export async function search(req, res) {
  const name = req.query.q;
  const products = await searchProduct(name);
  res.json(products);
}

export async function deleteProduct(req, res) {
  const id = parseInt(req.params.id);
  await deleteProductById(id);
  res.status(204).json({});
}
