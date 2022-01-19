interface ICategoryDTO {
  name: string
  description: string
}

import { Category } from '../models/Category'

class CategoryRepository {
	private categories: Category[]

	constructor() {
		this.categories = []
	}

	create({ name, description }: ICategoryDTO) {
		const category = new Category(name, description)
		this.categories.push(category)

		return category
	}
}

export { CategoryRepository }