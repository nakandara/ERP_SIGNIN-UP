import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../create-modules/user.dto'; // Corrected import path

export class UpdateUserDto extends PartialType(CreateUserDto) {} // Corrected class name
