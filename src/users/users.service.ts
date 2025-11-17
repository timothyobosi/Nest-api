import { Injectable } from '@nestjs/common'

@Injectable() //Decorator- attach metadata that deaclreas this class we are creating
export class UsersService {
    private users = [
        //user objects -> Properety inside userService class
        {
            "id" : 1,
            "name" : "Leann Graham",
            "email" : "sincere@april.biz",
            "role" : "INTERN",
        },
        {
            "id" : 2,
            "name" : "Ervin Howell",
            "email" : "Shanna@melisasa.tv",
            "role" : "INTERN",
        },
        {
            "id" : 3,
            "name" : "Clementine Bauch",
            "email" : "clement@bauch.tv",
            "role" : "ENGINEER",
        },
        {
            "id" : 4,
            "name" : "Patricia Lebsack",
            "email" : "par@leback.tv",
            "role" : "ENGINEER",
        },
        {
            "id" : 5,
            "name" : "Chelsey Dietrich",
            "email" : "lauciohettinger@annie.ca",
            "role" : "ADMIN",
        }     

    ]


    findAll(role?: 'INTERN'|'ENGINEER'|'ADMIN'){
        //create what goes inside the method
         if(role){ // since its is an arrya we can filter to return users with the role specified
            return this.users.filter(user => user.role === role)//user in our filter which is a high order array method
         }// and we want it to match the role passed in as argument
         return this.users //if no role wsa passed return all users

    }

    findOne(id: number){
        const user 
    }

}
