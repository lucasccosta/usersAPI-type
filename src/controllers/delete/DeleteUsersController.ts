import { Request, Response } from "express"
import { DeleteUsersService } from "../../services/DeleteUsersService"


class DeleteUsersController {

    async handleDelete(request: Request, response: Response){
        const {id} = request.params

        const deleteUsersService = new DeleteUsersService()

        const user = await deleteUsersService.runDelete(id)

        return response.status(200).json({message: "User deleted successfully!"})
    }
}

export { DeleteUsersController }