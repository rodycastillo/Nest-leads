import { Module } from '@nestjs/common';
import { LeadsModule } from './modules/leads/leads.module';

@Module({
  imports: [LeadsModule],
})
export class AppModule {}
