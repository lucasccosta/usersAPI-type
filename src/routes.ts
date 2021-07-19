import {Router} from 'express'
import {CreateUsersController} from "./controllers/create/CreateUsersController"
import { UpdateSpecificUsersController } from './controllers/update/UpdateSpecificUsersController'
import { GetUsersController } from './controllers/get/GetUsersController'
import { DeleteUsersController } from './controllers/delete/DeleteUsersController'

const router = Router()

const createUsersController = new CreateUsersController()
const updateSpecificUsersController = new UpdateSpecificUsersController()
const deleteUsersController = new DeleteUsersController()
const getUsersController = new GetUsersController()

// POST ROUTE
router.post('/users', createUsersController.handle)

// PATCH ROUTES
router.patch('/users/info/:id',updateSpecificUsersController.handleUpdateInfo)
router.patch('/users/nickname/:id',updateSpecificUsersController.handleUpdateNickname)

// GET ROUTES
// Ex de Pesquisa: localhost:3000/users/lastname?lastname=Olimpo
router.get('/users/name', getUsersController.handleName)
router.get('/users/lastname', getUsersController.handleLastname)
router.get('/users/nickname',getUsersController.handleFilterNickname)
router.get('/users', getUsersController.handleAll)

// DELETE ROUTE
router.delete('/users/:id', deleteUsersController.handleDelete)

export {router}