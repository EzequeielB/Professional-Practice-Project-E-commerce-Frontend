import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UnauthorizedAccess } from 'domain/exceptions/UnauthorizedAccessException';
import { AccessDeniedException } from 'domain/exceptions/AccessDeniedException';
import { TokenExpiredException } from 'domain/exceptions/TokenExpiredException';
import { TokenBlacklistRepository } from 'domain/repositories/TokenBlacklistRepository';
import { Role } from 'domain/entities/enum/Role';

dotenv.config();

interface JwtPayload {
  id: number;
  email: string;
  roles: Role[];
  type: 'access' | 'refresh';
}

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    roles: Role[];
  };
}

export function authenticateJWT(blacklistRepo: TokenBlacklistRepository) {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new AccessDeniedException());
    }

    const token = authHeader.split(' ')[1];

    const isBlacklisted = await blacklistRepo.isTokenBlacklisted(token);
    if (isBlacklisted) {
      return next(new UnauthorizedAccess());
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

      if (decoded.type !== 'access') {
        return next(new AccessDeniedException());
      }

      req.user = {
        id: decoded.id,
        email: decoded.email,
        roles: decoded.roles,
      };

      next();
    } catch (err: any) {
      if (err.name === 'TokenExpiredError') {
        return next(new TokenExpiredException());
      }

      return next(new UnauthorizedAccess());
    }
  };
}