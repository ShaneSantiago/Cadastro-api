import { Router } from "express";
import { UserController } from "../Controller/UserController";

export const useRouter = Router()

const userController = new UserController()

useRouter.post("/create", userController.createUser)
useRouter.get("/all", userController.allUser)