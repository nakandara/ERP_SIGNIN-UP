import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service'; // Corrected import path
import { CreateUserDto } from '../dto/create-modules/user.dto'; // Corrected import path
import { UpdateUserDto } from '../dto/update-modules/user.dto'; // Corrected import path

@Controller('modules/user') // Corrected controller path
export class UserController { // Corrected controller name
  constructor(private readonly userService: UserService) {} // Corrected service reference

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.createUser(createUserDto);
      return { message: 'User registered successfully', user };
    } catch (error) {
      throw new HttpException('Registration failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
}
