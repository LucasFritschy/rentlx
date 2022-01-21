import { Category } from '../../model/Category'
import { ICategoriesRepository, ICategoryDTO } from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]
  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance() {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
  }

  list(): Category[] {
    return this.categories
  }

  create({ name, description }: ICategoryDTO): void {
    const category = new Category(name, description)
    this.categories.push(category)
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name)

    return category
  }
}

export { CategoriesRepository }
