import { Router } from 'express'

import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase'

const authenticationRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenticationRoutes.post('/', authenticateUserController.handle)

export { authenticationRoutes }