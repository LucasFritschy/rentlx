import { Specification } from '../models/Specification'

interface ISpecificationDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  list(): Specification[]
  create({ name, description }: ISpecificationDTO): void
  findByName(name: string): Specification | undefined
}

export { ISpecificationsRepository, ISpecificationDTO }
