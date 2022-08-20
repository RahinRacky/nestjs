import { IsString, IsInt, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {

  @IsOptional()
  @IsInt()
  id: number;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsInt()
  age: number;
}