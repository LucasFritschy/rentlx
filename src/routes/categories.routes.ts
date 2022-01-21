import { Router } from 'express'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(response)
})

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

export { categoriesRoutes }
