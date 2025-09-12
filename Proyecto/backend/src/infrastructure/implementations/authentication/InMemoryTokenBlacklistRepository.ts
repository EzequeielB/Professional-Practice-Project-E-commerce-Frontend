import { TokenBlacklistRepository } from 'domain/repositories/TokenBlacklistRepository';
import jwt from 'jsonwebtoken';

export class InMemoryTokenBlacklistRepository implements TokenBlacklistRepository {
  private readonly blacklist: Set<string> = new Set();

  async addTokenToBlacklist(token: string): Promise<void> {
    this.blacklist.add(token);
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    return this.blacklist.has(token);
  }

  async removeExpiredTokens(): Promise<void> {
    for (const token of this.blacklist) {
      try {
        jwt.verify(token, process.env.JWT_SECRET as string);
      } catch (err: any) {
        if (err.name === 'TokenExpiredError') {
          this.blacklist.delete(token);
        }
      }
    }
  }
}
