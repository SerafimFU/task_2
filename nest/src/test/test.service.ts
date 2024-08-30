import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from 'src/database/users/users.service';

@Injectable()
export class TestService {
  constructor(
    private usersService: UsersService,
  ) {}

  async test() {
    const result = await this.usersService.test();
    const total = {
      total: result.affected
    }
    return (total)
  }

  async bar() {
    const result = await this.usersService.bar();
    const total = {
      total: result.affected
    }
    return (total)
  }
}
