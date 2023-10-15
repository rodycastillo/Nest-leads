import { Injectable, NotFoundException } from '@nestjs/common';
import { Lead } from './lead.entity';

@Injectable()
export class LeadsService {
  private leads: Lead[] = [
    {
      id: '1',
      message: 'First',
    },
  ];

  getLeads(): Lead[] {
    return this.leads;
  }

  getLead(id: string): Lead {
    const lead = this.leads.find((item) => item.id === id);
    if (!lead) {
      throw new NotFoundException('Resource not found');
    }
    return lead;
  }

  createLead(message: string) {
    this.leads.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
  }
  updateLead(id: string, message: any) {
    const lead: Lead = this.getLead(id);

    lead.message = message;

    return lead;
  }

  removeLead(id: string) {
    const index = this.leads.findIndex((item) => item.id === id);

    if (index >= 0) {
      this.leads.splice(index, 1);
    }
  }
}
