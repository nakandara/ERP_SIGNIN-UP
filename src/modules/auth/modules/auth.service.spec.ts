import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service'; // Correct import path

describe('AuthService', () => { // Corrected service name
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService], // Corrected service reference
    }).compile();

    service = module.get<AuthService>(AuthService); // Corrected service reference
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
