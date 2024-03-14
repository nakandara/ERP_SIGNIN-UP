import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller'; // Corrected import path
import { UserService } from './user.service'; // Corrected import path

describe('UserController', () => { // Corrected controller name
  let controller: UserController; // Corrected controller name

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController], // Corrected controller name
      providers: [UserService], // Corrected service name
    }).compile();

    controller = module.get<UserController>(UserController); // Corrected controller name
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
