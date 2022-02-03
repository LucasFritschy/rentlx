import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../errors/AppError'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Incorrect user or password', 401)
    }

    const passwordsMatch = await compare(password, user.password)

    if (!passwordsMatch) {
      throw new AppError('Incorrect user or password', 401)
    }

    const token = sign({}, 'e9693b3c5381997376b678fbaf6c2e59', {
      subject: user.id,
      expiresIn: '1d',
    })

    const authResponse: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    }

    return authResponse
  }
}

export { AuthenticateUserUseCase }
