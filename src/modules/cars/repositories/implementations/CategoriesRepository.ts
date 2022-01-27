import { getRepository, Repository } from 'typeorm'

import { Category } from '../../entities/Category'
import { ICategoriesRepository, ICategoryDTO } from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>
  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.repository = getRepository(Category)
  }

  public static getInstance() {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
  }

  async create({ name, description }: ICategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.repository.findOne({ where: { name } })

    if (!category) {
      throw new Error('user not found')
    }

    return category
  }
}

export { CategoriesRepository }
