import { UserInsertDTO } from "../Model/User";
import { BaseDataBase } from "./BaseDataBase";


export class UserData extends BaseDataBase{

    private static TABLE_NAME = "usuario_cadastro"

    async insertUser(user: UserInsertDTO): Promise<string> {
        try {
            
            const {id, nome, email, nascimento, telefone} = user

            await this.getConnection().insert({
                id,
                nome,
                email,
                nascimento,
                telefone
            }).into(UserData.TABLE_NAME)

            return "Cadastro realizado com sucesso"
        } catch (error: any) {
            throw new Error(error.message)
        }

    }

    async allUser(){
        try {
            const result = await this.getConnection().select("*").from(UserData.TABLE_NAME)
            
            return result

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}