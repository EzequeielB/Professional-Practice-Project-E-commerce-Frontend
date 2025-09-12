import jwt from 'jsonwebtoken';
import { TokenService } from 'application/services/TokenService/TokenService';
import { Token } from 'application/DTO/response/authentication/Token';
import { Role } from 'domain/entities/enum/Role';
import { UnauthorizedAccess } from 'domain/exceptions/UnauthorizedAccessException';
import { TokenExpiredException } from 'domain/exceptions/TokenExpiredException';

interface JwtPayload {
  id: number;
  email: string;
  roles: Role[];
  type: 'access' | 'refresh';
}

export class RefreshTokenUseCase {
  private readonly tokenService: TokenService;

  constructor() {
    this.tokenService = new TokenService();
  }

  run(refreshToken: string): Token {
    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET as string) as JwtPayload;

      if (decoded.type !== 'refresh') {
        throw new UnauthorizedAccess();
      }

      const payload = {
        id: decoded.id,
        email: decoded.email,
        roles: decoded.roles,
      };

      const accessToken = this.tokenService.generateAccessToken(payload);
      const newRefreshToken = this.tokenService.generateRefreshToken(payload);

      return {
        accessToken,
        refreshToken: newRefreshToken,
      };
    } catch (err: any) {
      if (err.name === 'TokenExpiredError') {
        throw new TokenExpiredException();
      }
      throw new UnauthorizedAccess();
    }
  }
}
