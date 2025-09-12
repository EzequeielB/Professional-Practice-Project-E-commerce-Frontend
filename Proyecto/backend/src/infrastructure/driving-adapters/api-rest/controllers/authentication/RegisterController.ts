import type { Request, Response, NextFunction } from 'express'
import type { UserRepository } from 'domain/repositories/UserRepository'
import { UserCreatorUseCase } from 'application/useCases/UserCreator'
import type { Token } from 'application/DTO/response/authentication/Token'
import type { UserRegisterRequest } from 'application/DTO/request/authentication/UserRegisterRequest'
import { userRegisterSchema } from 'application/validators/UserValidator'
import { BadRequestException } from 'domain/exceptions/BadRequestException'

export class RegisterController {
  constructor(private readonly userRepository: UserRepository) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userRegisterRequest: UserRegisterRequest = req.body
      const { error } = userRegisterSchema.validate(userRegisterRequest)

      if (error) {
        return next(new BadRequestException(error.details[0].message))
      }

      const useCase = new UserCreatorUseCase(this.userRepository)
      const token: Token = await useCase.run(userRegisterRequest)

      res.status(201).json(token)
    } catch (err) {
      next(err)
    }
  }
}
