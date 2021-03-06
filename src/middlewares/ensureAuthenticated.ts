import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { AppError } from '../errors/AppError'
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository'

interface IPayload {
  user_id: string
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authToken = request.headers.authorization

  if (!authToken) {
    throw new AppError('Authentication token not found', 401)
  }

  const [, jwtToken] = authToken.split(' ')

  try {
    const { user_id } = verify(
      jwtToken,
      'e9693b3c5381997376b678fbaf6c2e59'
    ) as IPayload

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError('User not found')
    }

    request.user = {
      id: user_id,
    }

    next()
  } catch (error) {
    throw new AppError('Invalid jwt token', 401)
  }
}

export { ensureAuthenticated }
