import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';


@Module({
  imports: [CatsModule, UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService,CatsService,UsersService],
})
export class AppModule {}
