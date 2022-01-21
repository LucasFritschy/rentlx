import { Request, Response } from 'express'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  private createCategoryUseCase
  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body

    const category = this.createCategoryUseCase.execute({ name, description })

    return response.status(201).json({ category })
  }
}

export { CreateCategoryController }
