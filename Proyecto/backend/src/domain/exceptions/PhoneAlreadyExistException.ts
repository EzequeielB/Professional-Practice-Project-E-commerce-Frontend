export class PhoneAlreadyExistException extends Error {
  constructor () {
    super('Phone already exist')
  }
}