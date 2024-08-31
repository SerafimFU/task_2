import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { UsersModule } from 'src/database/users/users.module';

@Module({
  imports: [
    UsersModule
  ],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
