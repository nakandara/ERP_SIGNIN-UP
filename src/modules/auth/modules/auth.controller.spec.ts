import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller'; // Correct import path
import { AuthService } from './auth.service'; // Correct import path

describe('AuthController', () => { // Remove 'Modules\' from the describe block
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController], // Remove 'Modules\' from the controllers array
      providers: [AuthService], // Remove 'Modules\' from the providers array
    }).compile();

    controller = module.get<AuthController>(AuthController); // Remove 'Modules\' from get<>
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
