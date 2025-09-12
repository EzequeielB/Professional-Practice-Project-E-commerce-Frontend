import { User } from "domain/entities/User";
import { Token } from "application/DTO/response/authentication/Token";
import { UserRegisterRequest } from "application/DTO/request/authentication/UserRegisterRequest";
import { UserRepository } from "domain/repositories/UserRepository";
import { ExistUserByEmail } from "application/services/ExistsUserByEmail/ExistUserByEmail";
import { ExistUserByPhone } from "application/services/ExistsUserByPhone/ExistUserByPhone";
import { EmailAlreadyExistException } from "domain/exceptions/EmailAlreadyExistException";
import { UserIdNotGeneratedException } from "domain/exceptions/UserIdNotGeneratedException";
import { TokenService } from "application/services/TokenService/TokenService";
import bcrypt from "bcrypt";
import { Role } from "domain/entities/enum/Role";
import { PhoneAlreadyExistException } from "domain/exceptions/PhoneAlreadyExistException";

export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository
  private readonly _existUserByEmail: ExistUserByEmail
  private readonly _existUserByPhone: ExistUserByPhone
  private readonly _tokenService: TokenService;

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository;
    this._existUserByEmail = new ExistUserByEmail(userRepository);
    this._existUserByPhone  = new ExistUserByPhone(userRepository);
    this._tokenService = new TokenService();
  }

  async run (body: UserRegisterRequest): Promise<Token> {    
    const existsUserByEmail: boolean = await this._existUserByEmail.run(body.email);
    const existUserByPhone: boolean = await this._existUserByPhone.run(body.phone);
    
    if (existsUserByEmail) {
      throw new EmailAlreadyExistException();
    } else if (existUserByPhone) {
      throw new PhoneAlreadyExistException();
    }

    // Hashed password
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create User entity from DTO
    const user = new User(
      body.email,
      hashedPassword,
      body.phone,
      [Role.CLIENT],
      false
    );

    // Save User
    const createdUser = await this._userRepository.registerUser(user);

    if (createdUser.id === undefined) {
      throw new UserIdNotGeneratedException();
    }

    // Generated Token
    const payload = {
      id: createdUser.id,
      email: createdUser.email,
      roles: createdUser.roles,
    };

    const accessToken = this._tokenService.generateAccessToken(payload);
    const refreshToken = this._tokenService.generateRefreshToken(payload);

    return {
      accessToken,
      refreshToken,
    };

  }
}