import { Role } from "./enum/Role";

export class User {
  public readonly id?: number;
  public email: string;
  public password: string;
  public phone: string;
  public roles: Role[];
  public isDeleted: boolean;

  constructor(
    email: string,
    password: string,
    phone: string,
    roles: Role[],
    isDeleted: boolean = false
  ) {
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.roles = roles;
    this.isDeleted = isDeleted;
  }

  assignId(id: number): void {
    (this as any).id = id;
  }
}
