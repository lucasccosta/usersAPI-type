import { Request, Response } from "express";
import { UpdateSpecificUsersService } from "../../services/UpdateSpecificUsersService";


class UpdateSpecificUsersController {

  async handleUpdateInfo(request: Request, response: Response): Promise<Response>{
    const {id} = request.params
    const {lastname, address} = request.body

    const updateSpecificUsersService = new UpdateSpecificUsersService()

    const updateInfo = await updateSpecificUsersService.runUpdateInfo({
      id,
      lastname,
      address
    })

    return response.status(200).json({message:'User updated successfully!', updateInfo})
  }

  async handleUpdateNickname(request: Request, response: Response): Promise<Response>{
    const {id} = request.params
    const {nickname} = request.body

    const updateSpecificUsersService = new UpdateSpecificUsersService()

    const updateInfo = await updateSpecificUsersService.runUpdateNickname({
      id,
      nickname
    })

    return response.status(200).json({message:'User updated successfully!', updateInfo})
  }
}

export { UpdateSpecificUsersController }