import { UserRepository } from "domain/repositories/UserRepository";

export class  ExistUserByPhone {
  private readonly _userRepository : UserRepository

  constructor (userRepository : UserRepository) {
    this._userRepository = userRepository
  }

  async run (phone: string): Promise<boolean> {
    const user = await this._userRepository.getUserByPhone(phone)

    if (user != null) return true

    return false
  }
}