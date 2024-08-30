import { Controller, Request, Post, BadRequestException, Get } from '@nestjs/common';
import { TestService } from './test/test.service';

@Controller()
export class AppController {
  constructor(private testService: TestService) {}

  @Post('test')
  async test() {
    return this.testService.test();
  }

  @Post('bar')
  async bar() {
    return this.testService.bar();
  }
}
