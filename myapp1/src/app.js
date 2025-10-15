import express from "express";
import prisma from "./prismaClient.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Api v0.5.0");
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

export default app;
