import { User } from "@prisma/client";
import Prisma from "../utils/config/DBConfig";




export class UserRepository {
    async createUser(email: string, password: string, name?:string) : Promise<User>{

        // const hashedPassword
        }
}