import { CategoriesRepository } from '../repositories/CategoriesRepository'

interface IRequest {
  name: string
  description: string
}

class CreateCategoryService {
  private categoriesRepository: CategoriesRepository

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists')
    } else {
      const category = this.categoriesRepository.create({ name, description })
      return category
    }
  }
}

export { CreateCategoryService }
