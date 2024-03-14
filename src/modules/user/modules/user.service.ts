// user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/modules/user.entity';
import { CreateUserDto } from '../dto/create-modules/user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { fullName, email, password } = createUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User();
    user.fullName = fullName;
    user.email = email;
    user.password = hashedPassword;

    return await this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
  
}
