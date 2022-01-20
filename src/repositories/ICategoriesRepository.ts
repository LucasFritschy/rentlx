import { Category } from '../models/Category'

interface ICategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  list(): Category[]
  create({ name, description }: ICategoryDTO): void
  findByName(name: string): Category | undefined
}

export { ICategoriesRepository, ICategoryDTO }
