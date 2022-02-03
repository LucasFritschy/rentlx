import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const { email, password } = request.body

    const authResponse = await authenticateUserUseCase.execute({
      email,
      password,
    })

    return response.json(authResponse)

    return response.status(500).json({ error: 'something went wrong' })
  }
}

export { AuthenticateUserController }
