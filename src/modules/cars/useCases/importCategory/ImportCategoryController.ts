import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AppError } from '../../../../errors/AppError'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

    if (!file) {
      throw new AppError('csv file not found')
    }

    await importCategoryUseCase.execute(file)
    return response.status(201).json({ message: 'categories imported' })
  }
}

export { ImportCategoryController }
