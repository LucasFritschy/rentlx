import { Router } from 'express'

import { CategoryRepository } from '../repositories/CategoryRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {

	const { name, description } = request.body

	const category = categoriesRepository.create({ name, description })

	return response.status(201).json({ category })
})

export { categoriesRoutes }