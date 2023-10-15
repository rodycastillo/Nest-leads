import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { LeadsService } from './leads.service';
import { Lead } from './lead.entity';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadService: LeadsService) {}
  // @Get()
  // getLeads(@Query() datesQueries): string {
  //   const { date1, date2 } = datesQueries;
  //   return `The dates are ${date1} and ${date2}`;
  // }

  @Get()
  getLeads(): Lead[] {
    return this.leadService.getLeads();
  }

  @Get(':id')
  getLead(@Param('id') id: string): Lead {
    // return `Your id is ${id}`;
    return this.leadService.getLead(id);
  }

  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT)
  createLead(@Body('message') message: string): void {
    // return names;
    return this.leadService.createLead(message);
  }

  @Patch(':id')
  updateLead(@Param('id') id: string, @Body() message): Lead {
    // return `Your lead ${id} has been updated`;
    return this.leadService.updateLead(id, message);
  }

  @Delete(':id')
  deleteLead(@Param('id') id: string): void {
    // return `Your lead ${id} has been deleted`;
    return this.leadService.removeLead(id);
  }
}
