import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TestModule } from './test/test.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './database/users/users.module';

@Module({
  imports: [TestModule, DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
