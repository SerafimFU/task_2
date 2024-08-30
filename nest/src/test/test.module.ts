import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { UsersModule } from 'src/database/users/users.module';

/* Модули AUTH и установка времени действия токена */

@Module({
  imports: [
    UsersModule
  ],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
