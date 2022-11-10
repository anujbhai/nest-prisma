/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
} from '@nestjs/common';

import { UsersService } from './users.service';
import {User as UserModel} from "@prisma/client";

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.usersService.users({});
  }
}

