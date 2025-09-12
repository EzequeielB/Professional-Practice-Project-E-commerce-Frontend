import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from './authenticateJWT';
import { UnauthorizedAccess } from 'domain/exceptions/UnauthorizedAccessException';

export function authorizeRoles(...allowedRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const userRoles = req.user?.roles || [];

    const hasAccess = userRoles.some(role => allowedRoles.includes(role));
    if (!hasAccess) {
      return new UnauthorizedAccess();
    }

    next();
  };
}
