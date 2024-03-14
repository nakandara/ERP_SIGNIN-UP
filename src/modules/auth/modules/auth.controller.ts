import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service'; // Correct import path
import { CreateAuthDto } from '../dto/create-modules/auth.dto'; // Correct import path
import { UpdateAuthDto } from '../dto/update-modules/auth.dto'; // Correct import path

@Controller('modules/auth') 
export class AuthController { // Corrected controller name
  constructor(private readonly authService: AuthService) {} // Corrected service reference

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return this.authService.login(user);
  }

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) { // Corrected DTO reference
  //   return this.authService.create(createAuthDto); // Corrected service reference
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll(); // Corrected service reference
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id); // Corrected service reference
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) { // Corrected DTO reference
  //   return this.authService.update(+id, updateAuthDto); // Corrected service reference
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id); // Corrected service reference
  // }
}
