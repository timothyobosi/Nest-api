export class CreateUserDto {
  //id is created after we have received all these data
  name: string
  email: string
  role: 'INTERN' | 'ENGINEER' | 'ADMIN'
}
