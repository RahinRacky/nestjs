import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  createUser(UserEntity: UserEntity): Promise<UserEntity>  {
    return this.usersRepository.save(UserEntity);
  }

  findAll(): Promise<UserEntity[]> {
    return  this.usersRepository.find();
  }

  findOne(id: number): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(id: string, postData: CreateUserDto) {
    const user = await this.usersRepository
      .update( id, postData);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
