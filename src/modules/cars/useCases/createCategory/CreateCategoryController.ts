import { Request, Response } from 'express'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  private createCategoryUseCase
  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body

    try {
      const category = this.createCategoryUseCase.execute({ name, description })
      return response.status(201).json({ category })
    } catch (error) {
      if (error instanceof Error) {
        return response.status(501).json({ error: error.message })
      }
    }
    return response.status(500).json({ error: 'something went wrong' })
  }
}

export { CreateCategoryController }
