import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { GetSpecificUsersServices } from "../services/GetSpecificUsersServices";


class GetSpecificUsersController {

  // handle name && lastname - não ta completo
  // async handle(request:Request, response: Response){
  //   const {name, lastname} = request.body

  //   const getSpecificUsersServices = new GetSpecificUsersServices()

  //   try{
  //     const getUsers = await getSpecificUsersServices.run({
  //       name,
  //       lastname
  //     })
  
  //     console.log(getUsers)
  //     return response.status(200).json(getUsers)
  //   } catch(error){
  //     return response.status(400).json({message:'Enter some valid "name" or "lastname" '})
  //   }
  // }

  // ok
  async handleFilterNickname(request:Request, response: Response){
      const {nickname} = request.body;

      const getSpecificUsersServices = new GetSpecificUsersServices()

      try{
        const getUser = await getSpecificUsersServices.runFilterNickname(nickname)
        console.log(getUser)
        return response.status(200).json(getUser)
      } catch (error){
        console.log(error)
        return response.status(400).json(error.message);
        
      }
    };
    

  async handleFilterName(request: Request, response: Response){
    const {name} = request.body;

      const getSpecificUsersServices = new GetSpecificUsersServices()

      const getUser = await getSpecificUsersServices.runFilterName(name)
      console.log(getUser)
      return response.status(200).json(getUser)
  }
    
  async handleFilterLastname(request: Request, response: Response){
      const {lastname} = request.body;

      const getSpecificUsersServices = new GetSpecificUsersServices()

      try{
        const getUser = await getSpecificUsersServices.runFilterLastname(lastname)
        console.log(getUser)
        return response.status(200).json(getUser)
      } catch(Error){
        return response.status(400).json({message:'Enter some valid "name" or "lastname" '})
      }
    }
 
}

export { GetSpecificUsersController }