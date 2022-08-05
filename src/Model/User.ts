export interface UserInputDTO {
    nome: string,
    email: string,
    nascimento: string,
    telefone: number
}

export interface UserInsertDTO extends UserInputDTO {
    id: string
}