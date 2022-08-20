import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateUserDto {

  @IsInt()
  id: number;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsInt()
  age: number;
}