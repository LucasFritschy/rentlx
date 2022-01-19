import { Router } from 'express'

import { CategoryRepository } from '../repositories/CategoryRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoryRepository()

categoriesRoutes.get('/', (request, response) => {
	const categories = categoriesRepository.list()

	return response.status(200).json({ categories })
})

categoriesRoutes.post('/', (request, response) => {

	const { name, description } = request.body

	const categoryAlreadyExists = categoriesRepository.findByName(name)

	if(categoryAlreadyExists) {
		return response.status(400).json({ error: 'Categoria já cadastrada no sistema'})
	}

	const category = categoriesRepository.create({ name, description })

	return response.status(201).json({ category })
})

export { categoriesRoutes }