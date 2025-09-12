import { UserRepository } from "domain/repositories/UserRepository";
import { TokenService } from "application/services/TokenService/TokenService";
import { LoginRequest } from "application/DTO/request/authentication/UserLoginRequest";
import { Token } from "application/DTO/response/authentication/Token";
import bcrypt from "bcrypt";
import { BadCredentialsException } from "domain/exceptions/BadCredentialsException";

export class UserLoginUseCase {
  private readonly _userRepository: UserRepository;
  private readonly _tokenService: TokenService;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
    this._tokenService = new TokenService();
  }

  async run(body: LoginRequest): Promise<Token> {
    const user = await this._userRepository.getUserByEmail(body.email);

    if (!user) {
      throw new BadCredentialsException();
    }

    const passwordMatches = await bcrypt.compare(body.password, user.password);

    if (!passwordMatches) {
      throw new BadCredentialsException();
    }

    const payload = {
      id: user.id!,
      email: user.email,
      roles: user.roles,
    };

    const accessToken = this._tokenService.generateAccessToken(payload);
    const refreshToken = this._tokenService.generateRefreshToken(payload);

    return {
      accessToken,
      refreshToken,
    }
  }
}
