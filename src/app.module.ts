import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsController } from './modules/leads/leads.controller';
import { LeadsService } from './modules/leads/leads.service';
import { LeadsModule } from './modules/leads/leads.module';

@Module({
  imports: [LeadsModule],
  controllers: [AppController, LeadsController],
  providers: [AppService, LeadsService],
})
export class AppModule {}
