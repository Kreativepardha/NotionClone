import { UserRepository } from "../repository/UserRepository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const userRepository = new UserRepository();
export const JWT_SECRET = process.env.JWT_SECRET  || "superseceret"


export class UserService {
    async registerUser(email: string, password: string, name?: string,) {
        const existingUser = await userRepository.findUserByEmail(email)
        if(existingUser) throw new Error(`User Already Exists`)
            return userRepository.createUser(email, password, name)
    }
    async loginUser(email: string, password: string): Promise<string> {
        const user = await userRepository.findUserByEmail(email)
        if(!user) throw new Error(`User not found`)
            const validPassword = await bcrypt.compare(password, user.password)
            if(!validPassword) throw new Error(`Invalid Password`)

                const token = jwt.sign({ userId: user.id, email: user.email    }, JWT_SECRET, {
                    expiresIn: '20d'
                })
                return token;
            }
}


