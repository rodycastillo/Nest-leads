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

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadService: LeadsService) {}
  @Get()
  getLeads(@Query() datesQueries): string {
    const { date1, date2 } = datesQueries;
    return `The dates are ${date1} and ${date2}`;
  }

  @Get(':id')
  getLead(@Param('id') id: string): string {
    return `Your id is ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createLead(@Body('nombre') names: string) {
    return names;
  }

  @Patch(':id')
  updateLead(@Param('id') id: string, @Body() lead) {
    return `Your lead ${id} has been updated`;
  }

  @Delete(':id')
  deleteLead(@Param('id') id: string) {
    return `Your lead ${id} has been deleted`;
  }
}
