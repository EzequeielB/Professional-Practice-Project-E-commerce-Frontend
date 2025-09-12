import { User as DomainUser } from 'domain/entities/User';
import { Role } from 'domain/entities/enum/Role';
import { User as PrismaUser, UserRole as PrismaUserRole, Prisma } from '@prisma/client';

export class UserMapper {
  static toDomain(prismaUser: PrismaUser, userRoles: PrismaUserRole[]): DomainUser {
    const domainRoles = userRoles.map((ur) => ur.role as Role);

    const user = new DomainUser(
      prismaUser.email,
      prismaUser.password,
      prismaUser.phone,
      domainRoles,
      prismaUser.isDeleted
    );

    user.assignId(prismaUser.id);
    return user;
  }

  static toPrismaCreate(user: DomainUser): Prisma.UserCreateInput {
    return {
      email: user.email,
      password: user.password,
      phone: user.phone,
      isDeleted: user.isDeleted
    };
  }

  static toPrismaUserRoles(userId: number, roles: Role[]): Prisma.UserRoleCreateManyInput[] {
    return roles.map((role) => ({
      userId,
      role
    }));
  }
}
