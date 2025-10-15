import prisma from "../src/prismaClient.js";
import { faker } from "@faker-js/faker";

async function main() {
  await prisma.product.createMany({
    data: Array.from({ length: 20 }).map(() => ({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      stock: faker.number.int({ min: 0, max: 100 }),
    })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
