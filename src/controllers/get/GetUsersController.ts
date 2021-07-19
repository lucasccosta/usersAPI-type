import { Request, Response } from "express";
import { GetUsersServices } from "../../services/GetUsersServices";


class GetUsersController {

    async handleAll(request:Request, response: Response): Promise<Response>{
        const getUsersServices = new GetUsersServices()

        const users = await getUsersServices.runFilterAll()

        return response.status(200).json(users)
    }

    async handleName(request: Request, response: Response): Promise<Response> {
        const name = request.query

        const getUsersServices = new GetUsersServices()

        const users = await getUsersServices.runFilterName(name)

        return response.status(200).json(users)
    }

    async handleLastname(request: Request, response: Response): Promise<Response> {
        const lastname = request.query

        const getUsersServices = new GetUsersServices()

        const users = await getUsersServices.runFilterLastname(lastname)

        return response.status(200).json(users)
    }

    async handleFilterNickname(request:Request, response: Response){
        const {nickname} = request.body;
  
        const getUsersServices = new GetUsersServices()
  
        try{
          const getUser = await getUsersServices.runFilterNickname(nickname)
          console.log(getUser)
          return response.status(200).json(getUser)
        } catch (error){
          console.log(error)
          return response.status(400).json(error.message);
        } 
    }
}

export {GetUsersController}