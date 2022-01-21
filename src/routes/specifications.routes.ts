import { Router } from 'express'

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const specificationsRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

const createSpecificationService = new CreateSpecificationService(
  specificationsRepository
)

specificationsRoutes.get('/', (request, response) => {
  const specifications = specificationsRepository.list()

  return response.status(200).json({ specifications })
})

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const specification = createSpecificationService.execute({
    name,
    description,
  })

  return response.status(201).json({ specification })
})

export { specificationsRoutes }
