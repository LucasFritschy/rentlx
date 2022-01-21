import { Response } from 'express'

import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(response: Response) {
    const categories = this.listCategoriesUseCase.execute()

    return response.status(200).json({ categories })
  }
}

export { ListCategoriesController }
