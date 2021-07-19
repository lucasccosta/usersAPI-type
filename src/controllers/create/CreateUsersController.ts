import { Request, Response } from "express";
import { CreateUsersServices } from "../../services/CreateUsersServices";


class CreateUsersController {

  async handle(request: Request, response: Response){
    const {name,lastname, nickname, address, bio } = request.body

    const createUsersServices = new CreateUsersServices()
  
      const user = await createUsersServices.run({
        name,
        lastname,
        nickname,
        address,
        bio
      })
      return response.status(200).json({message:'User created successfully!', user})
    }

}

export { CreateUsersController }