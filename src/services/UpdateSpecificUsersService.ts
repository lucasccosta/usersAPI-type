import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

interface IUpdateUsers{
  id: string
  lastname?: string,
  address?: string
  nickname?: string
}

class UpdateSpecificUsersService{

  async runUpdateInfo({id, lastname, address}: IUpdateUsers){
    const usersService = getCustomRepository(UsersRepository)

    const userExists = await usersService.findOne({id})

    if(userExists){
      const updateUsersInfo = await usersService.update({id}, {lastname, address})
  
      return updateUsersInfo
    } else {
      throw new Error("User doesnt exists");
    }

  }
  async runUpdateNickname({id, nickname}: IUpdateUsers){
    const usersService = getCustomRepository(UsersRepository)

    const userExists = await usersService.findOne({id})

    if(userExists){
      const updateUsersInfo = await usersService.update({id}, {nickname})
  
      return updateUsersInfo
    } else {
      throw new Error("User doesnt exists");
    }
  }
}

export { UpdateSpecificUsersService }