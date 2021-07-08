import {Router} from 'express'
import {CreateUsersController} from "./controllers/CreateUsersController"
import { GetSpecificUsersController } from './controllers/GetSpecificUsersController'
import { UpdateSpecificUsersController } from './controllers/UpdateSpecificUsersController'

const router = Router()

const createUsersController = new CreateUsersController()
const getSpecificUsersController = new GetSpecificUsersController()
const updateSpecificUsersController = new UpdateSpecificUsersController()

router.post('/users', createUsersController.handle)

// ok
router.get('/users/nickname',getSpecificUsersController.handleFilterNickname)
router.get('/users/name', getSpecificUsersController.handleFilterName)
// router.get('/users/lastname', getSpecificUsersController.handleFilterLastname)

router.patch('/users/info/:id',updateSpecificUsersController.handleUpdateInfo)
router.patch('/users/nickname/:id',updateSpecificUsersController.handleUpdateNickname)

export {router}