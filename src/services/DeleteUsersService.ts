import { response } from "express"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"



class DeleteUsersService {
    async runDelete(id: string){
        const usersService = getCustomRepository(UsersRepository)

        const users = await usersService.delete(id)

        return users
    }
}

export { DeleteUsersService }