import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

import { v4 as uuid } from 'uuid';
import { Ticket } from './interfaces/ticket.interface';

@Injectable()
export class TicketsService {

  private tickets: Ticket[] = [
    {
      'id' : uuid(),
      'codigo' : 'PLA00001',
      'hora' : new Date(),
      'sedeId': 1,
      'tipoAtencionId': 1
    }
  ];

  findAll() {
    return this.tickets;
  }

  findOne(id: string) {
    const ticket = this.tickets.find( t => t.id === id );
    
    if ( !ticket ) throw new NotFoundException(`Ticket with id '${ id }' not found`);
        
    return ticket;
  }
}
