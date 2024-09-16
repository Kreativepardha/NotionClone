import { User } from '@prisma/client';
import Prisma from '../utils/config/DBConfig';
import bcrypt from 'bcrypt';

export class UserRepository {
  async createUser(
    email: string,
    password: string,
    name?: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return Prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  }
  async findUserByEmail(email: string) {
    return Prisma.user.findUnique({
      where: { email },
    });
  }
}
