import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { UserInputDTO } from "../Model/User";

export class UserController{

    async createUser(req:Request, res: Response){
        try {
            const {nome, email, nascimento, telefone} = req.body

            const input: UserInputDTO = {
                nome,
                email,
                nascimento,
                telefone
            }

            const userBusiness = new UserBusiness()
            const message = await userBusiness.user(input)

            res.status(200).send({message})
            
        } catch (error: any) {
            res.status(400).json({message: error.message})
        }
    }

    async allUser(req:Request, res:Response){
        try {

            const userBusiness = new UserBusiness()
            const allUsers = await userBusiness.alluser()

            res.status(200).send({allUsers})
            
        } catch (error: any) {
            res.status(400).json(error)
        }
    }
}