import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Role } from 'domain/entities/enum/Role';

dotenv.config();

interface JwtPayload {
  id: number;
  email: string;
  roles: Role[];
  type: 'access' | 'refresh';
}

export class TokenService {
  private readonly _jwtSecret: string;
  private readonly _accessExpiration: string;
  private readonly _refreshExpiration: string;

  constructor() {
    this._jwtSecret = process.env.JWT_SECRET as string;
    this._accessExpiration = process.env.JWT_EXPIRATION || '900';
    this._refreshExpiration = process.env.JWT_REFRESH_EXPIRATION || '604800';
  }

  generateAccessToken(payload: Omit<JwtPayload, 'type'>): string {
    return jwt.sign({ ...payload, type: 'access' }, this._jwtSecret, {
      expiresIn: `${Math.floor(Number(this._accessExpiration) / 1000)}s`
    });
  }

  generateRefreshToken(payload: Omit<JwtPayload, 'type'>): string {
    return jwt.sign({ ...payload, type: 'refresh' },this._jwtSecret, {
      expiresIn: `${Math.floor(Number(this._refreshExpiration) / 1000)}s`
    });
  }
}
