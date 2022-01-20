import { Router } from 'express'

import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

const createCategoryService = new CreateCategoryService(categoriesRepository)

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list()

  return response.status(200).json({ categories })
})

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const category = createCategoryService.execute({ name, description })

  return response.status(201).json({ category })
})

export { categoriesRoutes }
