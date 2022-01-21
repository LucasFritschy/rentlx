import { categoriesRepository } from '..'

import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
)

export { listCategoriesController }
