import { findAllUsers } from "../services/user.services.js";

export async function getUsers(req, res) {
  const users = await findAllUsers();
  res.json(users);
}
