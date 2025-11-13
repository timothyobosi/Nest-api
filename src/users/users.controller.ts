import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

//handle users route
@Controller('users')
export class UsersController {
  /*
    GET/users
    GET/users/:id( pass param inside the url when we want to get id of 1 user)
    POST/users 
    PATCH /users/:id (id as param to identify the user)  
    DELETE /users/:id 
    */

  @Get() //GET /users
  findAll() {
    return []
  }

  // @Get('interns') // GET /users/interns
  // findAllInterns(){
  //     return []
  // }

  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return { id }
  }

  @Post() //Post /users
  create(@Body() user:{}){
    return user
  }

  @Patch(':id')//PATCH /users/:id
  update(@Param('id') id:string, @Body() userUpdate:{}){
    return {id, ...userUpdate}
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id') id: string){
    return {id}
  }

}
