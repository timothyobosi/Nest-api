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

    findOne(id: number){ //finda on method, come in with an id, 
    // its going to be a number when this method recieves it
        const user = this.users.find(user => user.id === id)// users is another array method//user id needs to match the id number

        return user
    }

    //Receive a user, will be an object, we specify what is going to be in object
    //in past we had empty oject when we created our controller route
    create(user: {name: string, email: string: string, role: 'INTERN'|
        'ENGINEER'|'ADMIN'}){
            //ID will be auto generated
            //logic to create that id    //create new array
            const userByHighestId = [...this.users].sort((a,b) => b.id -a.id)
            const newUser ={
                //define a new user object
                //pick an id and generate a new one 
                //have an id that will I add to this user that we recieve as name email and role
                id : userByHighestId[0].id + 1, //get the first element in the sorted array and get its id and add 1 to it
                ...user //spread operator to get the rest of the properties from the user object passed in
                //all this to generate that id that is not already in the data
            }
            this.users.push(newUser)//push the new user to the users array
            return newUser//return the new user created
        }

        update(id: number, updatedUser:{name:string, email:string, // we cant update id but we can update other 3 properties
             role?:'INTERN' | 'ENGINEER' | 'ADMIN'})//? means optional for the update
             {  
                this.users = this.users.map(user => {// this will spread all the properties of the user 
                    if(user.id === id){
                        return{...user, ...updatedUser}//the updated user will overwrite the existing user properties
                    }
                    return user //if the id does not match return the user as is
                })

                
                return this.findOne(id) //return the updated user by calling findOne method with the id
             }

             //create the delete method, will recieve the id only
             delete(id: number){
                //inside the method we define the removedUser and defined seperately
                const removedUSer = this.findOne(id) //find the user to be removed

                this.users = this.users.filter(user => user.id !!== id) //Excludes that user that is needed to be removed
                //filter out the user with the matching id

                return removedUSer //return the removed user

             }     




}
