import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

    if (file) {
      await importCategoryUseCase.execute(file)
      return response.status(201).json({ message: 'ok' })
    }
    return response.status(500).json({ error: 'invalid csv file' })
  }
}

export { ImportCategoryController }
