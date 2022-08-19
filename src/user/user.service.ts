import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  createUser(UserEntity: UserEntity): Observable<UserEntity>  {
    return from(this.usersRepository.save(UserEntity));
  }

  findAll(): Observable<UserEntity[]> {
    return from(this.usersRepository.find());
  }

  findOne(id: number): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
