/* eslint-disable prettier/prettier */
import { Test } from '@nestjs/testing';

import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {User} from "../interfaces/user.interface";

describe("UsersController", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);

    // usersService = new UsersService();
    // usersController = new UsersController(usersService);
  });

  describe("findAll", () => {
    it("should return an empty array of users", async () => {
      const result: User[] = [];

      jest.spyOn(usersService, "findAll").mockImplementation(() => result);

      expect(await usersController.findAll()).toBe(result);
    });
  });
});
