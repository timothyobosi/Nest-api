import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe
} from '@nestjs/common'

import { UsersService } from './users.service'

import { UpdateUserDto } from './dto/update -user.dto'
import { CreateUserDto } from './dto/create-user.dto'

//handle users route
@Controller('users')
export class UsersController {
  //adding dependency injection to our controller
  // to be able to use the userService inside our controller
  //add instance of our service to our controller
  ///list user service
  constructor(private readonly userService: UsersService) {}
  /*
    GET/users
    GET/users/:id( pass param inside the url when we want to get id of 1 user)
    POST/users 
    PATCH /users/:id (id as param to identify the user)  
    DELETE /users/:id 
    */

  @Get() //GET /users or /users?role=value/
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role)
    //pass in a role if it was received
  }

  // @Get('interns') // GET /users/interns
  // findAllInterns(){
  //     return []
  // }

  @Get(':id') //GET /users/:id
  // findOne(@Param('id') id: string) {
  //we are recieving id as a string(thats how it will be sent because it is a param) all params are strings
  findOne(@Param('id', ParseIntPipe) id: number) {
    //ParseIntPipe will convert the string to a number
    return this.userService.findOne(id)
    // return this.userService.findOne(+id)
    // we need to convert it to a number by adding a + infont of id(urinary plus operator)
  }

  // @Post() //Post /users
  // create(
  //   @Body()
  //   user: {
  //     name: string
  //     email: string
  //     role: 'INTERN' | 'ENGINEER' | 'ADMIN'
  //   }
  // ) {
  //   return this.userService.create(user)
  // }

  @Post() //Post /users
  create(
    @Body()
    createUserDto: CreateUserDto
  ) {
    return this.userService.create(createUserDto)
  }

  @Patch(':id') //PATCH /users/:id
  update(
    @Param('id', ParseIntPipe) id: number, //get the id from the param and convert to number
    @Body()
    updateUserDto: UpdateUserDto //get the body from the request
  ) {
    return this.userService.update(id, updateUserDto)
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id)
  }
}
