import { Request, Response } from 'express'

import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request

    if (file) {
      this.importCategoryUseCase.execute(file)
      return response.json({ message: 'ok' })
    }
    return response.json({ error: 'something went wrong' })
  }
}

export { ImportCategoryController }
