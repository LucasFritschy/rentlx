import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AuthenticateUserUseCase } from './AuthenticateUserController'

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const { email, password } = request.body

    try {
      const authResponse = await authenticateUserUseCase.execute({
        email,
        password,
      })

      return response.json(authResponse)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(500).json(error.message)
      }
    }

    return response.status(500).json({ error: 'something went wrong' })
  }
}

export { AuthenticateUserController }
