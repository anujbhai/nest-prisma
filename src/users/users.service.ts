/* eslint-disable prettier/prettier */
import {Injectable} from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import {User, Prisma} from "@prisma/client";
// import {User} from "../interfaces/user.interface";

@Injectable()
export class UsersService {
  // private readonly users: User[] = [];
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // create(user: User) {
  //   this.users.push(user);
  // }

  // findAll(): User[] {
  //   return this.users;
  // }
}
