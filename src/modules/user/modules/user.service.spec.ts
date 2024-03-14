import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service'; // Corrected import path

describe('UserService', () => { // Corrected service name
  let service: UserService; // Corrected service name

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService], // Corrected service reference
    }).compile();

    service = module.get<UserService>(UserService); // Corrected service reference
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
