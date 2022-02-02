import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase)

    const data = request.body

    try {
      await createUserUseCase.execute(data)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(500).json({ error: error.message })
      }
    }

    return response.status(201).send()
  }
}

export { CreateUserController }
