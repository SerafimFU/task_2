import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Users } from './users.entity'

/* Список запросов к БД */

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}
  
  /* Find all */
  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  /* Find one по ID */
  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async test() {
    return await this.usersRepository.update({ 
      problem: true
    }, { 
      problem: false 
    });
  }

  async bar() {
    return await this.usersRepository.update({ 
      problem: true
    }, { 
      problem: true 
    });
  }
}