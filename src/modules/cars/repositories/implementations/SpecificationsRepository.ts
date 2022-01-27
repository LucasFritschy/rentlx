import { Specification } from '../../entities/Specification'
import {
  ISpecificationsRepository,
  ISpecificationDTO,
} from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]
  private static IMPLEMENTATION: SpecificationsRepository

  private constructor() {
    this.specifications = []
  }

  public static getImplementation() {
    if (!SpecificationsRepository.IMPLEMENTATION) {
      SpecificationsRepository.IMPLEMENTATION = new SpecificationsRepository()
    }

    return SpecificationsRepository.IMPLEMENTATION
  }

  list(): Specification[] {
    return this.specifications
  }

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification(name, description)
    this.specifications.push(specification)
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )

    return specification
  }
}

export { SpecificationsRepository }
