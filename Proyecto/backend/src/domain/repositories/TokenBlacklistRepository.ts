export interface TokenBlacklistRepository {
  addTokenToBlacklist(token: string): Promise<void>
  isTokenBlacklisted(token: string): Promise<boolean>
  removeExpiredTokens(): Promise<void>
}