export class UserIdNotGeneratedException extends Error {
  constructor(){
    super("User ID was not generated")
  }
}