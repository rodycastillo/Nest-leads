import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsController } from './leads/leads.controller';
import { LeadsService } from './leads/leads.service';

@Module({
  imports: [],
  controllers: [AppController, LeadsController],
  providers: [AppService, LeadsService],
})
export class AppModule {}
