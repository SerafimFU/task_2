import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from 'src/database/users/users.service';

@Injectable()
export class TestService {
  constructor(
    private usersService: UsersService,
  ) {}

  async test() {
    const result = await this.usersService.test();
    return ('total = ' + result.affected)
  }

  async bar() {
    const result = await this.usersService.bar();
    return ('total = ' + result.affected)
  }
}
