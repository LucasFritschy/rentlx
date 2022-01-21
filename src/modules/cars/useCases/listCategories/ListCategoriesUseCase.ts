import { CategoriesRepository } from '../../repositories/CategoriesRepository'

class ListCategoriesUseCase {
  private categoriesRepository: CategoriesRepository

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute() {
    return this.categoriesRepository.list()
  }
}

export { ListCategoriesUseCase }
