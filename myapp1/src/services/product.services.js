import prisma from "../prismaClient.js";

export async function findAllProduct() {
  const products = await prisma.product.findMany();
  return products;
}

export async function createProduct(data) {
  const result = await prisma.product.create({ data });
  return result;
}

export async function searchProduct(q) {
  const result = await prisma.product.findMany({
    where: {
      name: {
        contains: q,
      },
    },
  });

  return result;
}

export async function deleteProductById(id) {
  await prisma.product.delete({
    where: { id },
  });
}
