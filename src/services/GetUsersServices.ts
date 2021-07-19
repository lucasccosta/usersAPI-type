import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class GetUsersServices {
    async runFilterAll(){
    
        const usersRepository = getCustomRepository(UsersRepository)
        
        const user = await usersRepository.find()
        
        return user
      }

    async runFilterName(name: Object){
    
        const usersRepository = getCustomRepository(UsersRepository)
        
        const user = await usersRepository.find(name)
        console.log('Those are the params: ', name)
        
        return user
      }

    async runFilterLastname(lastname: Object){
    
        const usersRepository = getCustomRepository(UsersRepository)
        
        const user = await usersRepository.find(lastname)
        console.log('Those are the params: ', lastname)
        
        return user
      }

      async runFilterNickname(nickname: string){
        const usersRespository = getCustomRepository(UsersRepository)
    
        const userExists = await usersRespository.findOne({nickname})
    
        if(!userExists){
          throw new Error("Nickname doesn't exists");
        } else {
          return userExists
        }
    }
}

export { GetUsersServices }