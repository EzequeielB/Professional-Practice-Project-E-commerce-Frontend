import type { Request, Response, NextFunction } from 'express';
import { BadRequestException } from 'domain/exceptions/BadRequestException';
import { UserLogoutUseCase } from 'application/useCases/UserLogout';

export class LogoutController {
  
  constructor(private readonly logoutUseCase: UserLogoutUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new BadRequestException('Token no valid'));
      }

      const token = authHeader.split(' ')[1];

      await this.logoutUseCase.run(token);

      res.status(204).send(); // No Content
    } catch (err) {
      next(err);
    }
  }
}
