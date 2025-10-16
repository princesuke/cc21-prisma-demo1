import prisma from "../prismaClient.js";

export async function findAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}
