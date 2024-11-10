import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser({ email, password }: CreateUserDto) {
    try {
      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = await this.prismaService.user.create({
        data: {
          email,
          password: encryptedPassword,
        },
        select: {
          email: true,
          id: true,
        },
      });

      return user;
    } catch (err) {
      if (err.code === 'P2002') {
        throw new UnprocessableEntityException('Email already exists');
      }
      throw err;
    }
  }

  async getUser(userFilter: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUniqueOrThrow({
      where: userFilter,
    });
  }
}
