import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

    try {
      const category = await createCategoryUseCase.execute({
        name,
        description,
      })
      return response.status(201).json({ category })
    } catch (error) {
      if (error instanceof Error) {
        return response.status(500).json({ error: error.message })
      }
    }
    return response.status(500).json({ error: 'something went wrong' })
  }
}

export { CreateCategoryController }
