import { Category } from '../models/Category'

interface ICategoryDTO {
  name: string
  description: string
}

class CategoryRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
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

export { CategoryRepository }
