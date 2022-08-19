import { Controller, Get, Res, Post, HttpStatus, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { UserEntity } from './user.entity';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() user: UserEntity): Observable<UserEntity> {
      return this.userService.createUser(user)
    }
    
    @Get()
    getAllusers(): Observable<UserEntity[]>{
      return this.userService.findAll();
    }

  @Get(':id')
  getUserById(@Res() res: Response){
    res.status(HttpStatus.OK).json(this.userService.findAll());
  }

  /* @Post()
  create(): */
}
