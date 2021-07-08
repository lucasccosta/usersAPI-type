import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

// interface IGetUsers {
//   name:string,
//   lastname:string,
//   nickname: string
// }

class GetSpecificUsersServices {

  // run name e lastname
  // async run({name, lastname}: IGetUsers){
  //   const usersRespository = getCustomRepository(UsersRepository)

  //   if(name){
  //     const getUser = await usersRespository.find({
  //       name
  //     }) 
  //     return getUser
  //   } else if (lastname){
  //     const getUser = await usersRespository.find({
  //       lastname
  //     }) 
  //     return getUser
  //   } 

  //   const getUser = await usersRespository.find({
  //     name,
  //     lastname
  //   }) 
  //   if(getUser == []){
  //       throw new Error("User doesn't exists");
  //   }
  // }

  // filter by query -> OK
  
  // async runFilterNickname(nickname: string){
  //   const usersRespository = getCustomRepository(UsersRepository)

  //   const userExists = await usersRespository.findOne({nickname})

  //   if(!userExists){
  //     throw new Error("Nickname doesn't exists");
  //   } else {
  //     return userExists
  //   }

  // }
  async runFilterNickname(nickname: string){
    const usersRespository = getCustomRepository(UsersRepository)

    const userExists = await usersRespository.findOne({nickname})

    if(!userExists){
      throw new Error("Nickname doesn't exists");
    } else {
      return userExists
    }

  }

  // handle apenas por name
  async runFilterName(name: string){
    
    const usersRepository = getCustomRepository(UsersRepository)
    
    const user = await usersRepository.find({name})
    
    // quando tento lançar a excessão, ele retorna um array vazio
    // if(!user || user == undefined || user == []){
    //   throw new Error("User doesn't exists")
    // } else {
    //   return user
    // }
  }

  // não ta funcionando
  async runFilterLastname(lastname:string){

    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.find({
      lastname
    })
    return user
    // if(user != []){
    //   return user
    // } else{
    //   throw new Error("User doesn't exists")
    // }
  }
}

export { GetSpecificUsersServices }