import { User } from './../../models/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly Users: User[] = []

    create( user : User ): void{
        this.Users.push(user)
    }

    getAll() : User[]{
        return this.Users
    }

    getByEmail(correo : string) : User{
        return this.Users.find( (user) => user.correo === correo )
    }

    updateUserById(id : number, user : User) : boolean {
        let user_index = this.Users.findIndex( (user) => user.id === id )
        const olduser = this.Users[user_index]

        if(user_index !== -1 ){
            //mantener los datos que no se van a actualizar
            this.Users[user_index] = {
                id : user.id,
                nombre : user.nombre,
                correo : user.correo,
                telefono : user.telefono
            }
            if (this.Users[user_index].id === undefined) {
                this.Users[user_index].id = olduser.id
            }
            if (this.Users[user_index].nombre === undefined) {
                this.Users[user_index].nombre = olduser.nombre
            }
            if (this.Users[user_index].correo === undefined) {
                this.Users[user_index].correo = olduser.correo
            }
            if (this.Users[user_index].telefono === undefined) {
                this.Users[user_index].telefono = olduser.telefono
            }

            return true
            
        }
        return false
    }
}
