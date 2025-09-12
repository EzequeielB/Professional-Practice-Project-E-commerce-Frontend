import type { Request, Response, NextFunction } from 'express';
import { UserLoginUseCase } from 'application/useCases/UserLogin';
import { BadCredentialsException } from 'domain/exceptions/BadCredentialsException';
import { LoginRequest } from 'application/DTO/request/authentication/UserLoginRequest';

export class LoginController {
  
  constructor(private readonly loginUseCase: UserLoginUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: LoginRequest = req.body;

      if (!body.email || !body.password) {
        throw new BadCredentialsException();
      }

      const token = await this.loginUseCase.run(body);
      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }
}