import { Request, Response, NextFunction } from 'express';
import { RefreshTokenUseCase } from 'application/useCases/RefreshToken';

export class RefreshTokenController {
  private readonly refreshUseCase: RefreshTokenUseCase;

  constructor() {
    this.refreshUseCase = new RefreshTokenUseCase();
  }

  handle(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new Error('Missing or invalid refresh token'));
    }

    const refreshToken = authHeader.split(' ')[1];

    try {
      const token = this.refreshUseCase.run(refreshToken);
      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }
}
