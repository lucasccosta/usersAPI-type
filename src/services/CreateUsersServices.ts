import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUser {
  name:string,
  lastname:string,
  nickname:string,
  address:string,
  bio?: string
}

class CreateUsersServices{
  
  async run({name, lastname, nickname, address, bio}: IUser){
    const usersRespository = getCustomRepository(UsersRepository)

    const userAlreadyExists = await usersRespository.findOne({
      nickname
    })

    if(userAlreadyExists){
      throw Error("User already exists! Create another one.")
    }

    const user = usersRespository.create({
      name,
      lastname,
      nickname,
      address,
      bio
    })

    await usersRespository.save(user)

    return user
  }
}

export { CreateUsersServices }