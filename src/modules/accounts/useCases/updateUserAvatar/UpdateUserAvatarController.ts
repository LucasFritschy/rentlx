import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AppError } from '../../../../errors/AppError'
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user

    const avatar_file = request.file?.filename

    if (avatar_file) {
      const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

      await updateUserAvatarUseCase.execute({ user_id: id, avatar_file })

      return response.status(204).json({ message: 'User avatar updated' })
    }

    throw new AppError('error retrieving avatar file', 500)
  }
}

export { UpdateUserAvatarController }
