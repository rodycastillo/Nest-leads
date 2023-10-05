import { Injectable } from '@nestjs/common';
import { Lead } from './lead.entity';

@Injectable()
export class LeadsService {
  private leads: Lead[] = [
    {
      id: '1',
      message: 'First',
    },
  ];
}
