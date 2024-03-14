import { Module } from '@nestjs/common';
import { UserService } from './user.service'; // Corrected import path
import { UserController } from './user.controller'; // Corrected import path
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/modules/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController], // Corrected controller reference
  providers: [UserService], // Corrected service reference
})
export class UserModule {} // Corrected module name
