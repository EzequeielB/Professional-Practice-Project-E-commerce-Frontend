import prisma from './prismaClient';
import { UserPrismaRepository } from '../driven-adapters/prisma/UserPrismaRepository';
import { RegisterController } from 'infrastructure/driving-adapters/api-rest/controllers/authentication/RegisterController';
import { LogoutController } from 'infrastructure/driving-adapters/api-rest/controllers/authentication/LogoutController';
import { InMemoryTokenBlacklistRepository } from 'infrastructure/implementations/authentication/InMemoryTokenBlacklistRepository';
import { UserLogoutUseCase } from 'application/useCases/UserLogout';
import { UserLoginUseCase } from 'application/useCases/UserLogin';
import { LoginController } from 'infrastructure/driving-adapters/api-rest/controllers/authentication/LoginController';
import { RefreshTokenController } from 'infrastructure/driving-adapters/api-rest/controllers/authentication/RefreshTokenController';

export const buildAuthControllers = () => {
  const userRepository = new UserPrismaRepository(prisma);

  const tokenBlacklistRepo = new InMemoryTokenBlacklistRepository();
  const userLogoutUseCase = new UserLogoutUseCase(tokenBlacklistRepo);

  const userLoginUseCase = new UserLoginUseCase(userRepository);

  return {
    registerController: new RegisterController(userRepository),
    logoutController: new LogoutController(userLogoutUseCase),
    loginController: new LoginController(userLoginUseCase),
    refreshTokenController: new RefreshTokenController(),
  };
};
