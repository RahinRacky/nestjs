import { Controller, Get, Res, Post, HttpStatus, Body, ValidationPipe, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './user.dto';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(
      @Body(new ValidationPipe()) createUserDto: CreateUserDto,
    ) {
      return this.userService.createUser(createUserDto);
    }

    @Post('/:id')
    async update(
      @Body() createUserDto: CreateUserDto,
    ) {
      return this.userService.createUser(createUserDto);
    }
    
    @Get()
    getAllUsers(): Promise<UserEntity[]>{
      return this.userService.findAll();
    }

  @Get('/:id')
  getUserById(@Param('id') id: number) : Promise<UserEntity>{
      return this.userService.findOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.userService.remove(id);
  }
}
