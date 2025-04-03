import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateWay } from './chat.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ChatGateWay, AppService],
})
export class AppModule {}
