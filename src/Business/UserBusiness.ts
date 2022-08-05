import { UserData } from "../Data/UseData"
import { UserInputDTO, UserInsertDTO } from "../Model/User"
import IdGenerator from "../Services/idGenerator"


export class UserBusiness {

    async user(input: UserInputDTO){

        if(!input.nome || !input.email || !input.nascimento || !input.telefone){
            throw new Error("Campos não preenchidos")
        }



        const user: UserInsertDTO = {
            id: IdGenerator.generate(),
            ...input
        }

        const userData = new UserData()
        const result = await userData.insertUser(user)

        return result
    }

    async alluser(){

        const userData = new UserData()
        const result = await userData.allUser()

        return result
    }
}