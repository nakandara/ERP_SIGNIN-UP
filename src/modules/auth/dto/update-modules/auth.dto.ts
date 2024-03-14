import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from '../create-modules/auth.dto'; // Corrected import path

export class UpdateAuthDto extends PartialType(CreateAuthDto) {} // Corrected class name
