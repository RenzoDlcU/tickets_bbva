import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { Sede } from './interfaces/sede.interface';
import { Ticket } from './interfaces/ticket.interface';

@Injectable()
export class SedesService {

  findOne(body: any) {
    let sede: Sede = {
      "id": body.sedeId,
      "aforo": body.aforo,
      "tickets": this.createRandomTickets(body.aforo, body.sedeId)

    }
    return sede;
  }

  createRandomTickets(aforo: number, sedeId: string) {
    let tickets: Ticket[] = [];
    const since = aforo > 8 ? 8 : aforo - 1;
    for(let i = 1; i<=(this.getRandom(since, aforo)); i++) {
      const tipoAtencionId = this.getRandom(1, 2);
      tickets.push(
        {
          id: uuid(),
          codigo: tipoAtencionId === 1 ? `PLA${i.toString()}` : `VEN${i.toString()}`,
          hora: new Date(),
          sedeId,
          tipoAtencionId: tipoAtencionId
        }
        );
      }
    return tickets;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }; 
}
