import { Category } from '../entities/Category'

interface ICategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  create({ name, description }: ICategoryDTO): Promise<void>
  list(): Promise<Category[]>
  findByName(name: string): Promise<Category | undefined>
}

export { ICategoriesRepository, ICategoryDTO }
