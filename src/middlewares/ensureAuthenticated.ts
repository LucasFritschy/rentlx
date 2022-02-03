import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository'

interface IPayload {
  sub: string
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authToken = request.headers.authorization

  if (!authToken) {
    throw new Error('Authentication token not found')
  }

  const [, jwtToken] = authToken.split(' ')

  try {
    const { sub } = verify(
      jwtToken,
      'e9693b3c5381997376b678fbaf6c2e59'
    ) as IPayload

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(sub)

    if (!user) {
      throw new Error('User not found')
    }

    next()
  } catch (error) {
    throw new Error('Invalid jwt token')
  }
}

export { ensureAuthenticated }
