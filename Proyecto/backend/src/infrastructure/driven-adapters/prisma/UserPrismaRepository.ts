import type { PrismaClient } from '@prisma/client'
import prisma from 'infrastructure/config/prismaClient'
import { UserRepository } from 'domain/repositories/UserRepository'
import { User } from 'domain/entities/User'
import { UserMapper } from './mappers/UserMapper'
import { Role } from 'domain/entities/enum/Role'

export class UserPrismaRepository implements UserRepository {
  private prisma: PrismaClient

  constructor(prismaClient?: PrismaClient) {
    this.prisma = prismaClient ?? prisma
  }

  async registerUser(user: User): Promise<User> {
    // Crear user y roles en una transacción
    const createdUser = await this.prisma.$transaction(async (tx) => {
      const userCreated = await tx.user.create({
        data: {
          email: user.email,
          password: user.password,
          phone: user.phone,
          isDeleted: user.isDeleted
        }
      })

      // Crear roles asociados
      await tx.userRole.createMany({
        data: UserMapper.toPrismaUserRoles(userCreated.id, user.roles)
      })

      // Traer roles completos para mapear al domain
      const roles = await tx.userRole.findMany({
        where: { userId: userCreated.id }
      })

      return UserMapper.toDomain(userCreated, roles)
    })

    return createdUser
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email }
    })

    if (!user) return null

    const roles = await this.prisma.userRole.findMany({
      where: { userId: user.id }
    })

    return UserMapper.toDomain(user, roles)
  }

  async getUserByPhone(phone: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { phone }
    })

    if (!user) return null

    const roles = await this.prisma.userRole.findMany({
      where: { userId: user.id }
    })

    return UserMapper.toDomain(user, roles)
  }
}
