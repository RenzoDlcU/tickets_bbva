import { Ticket } from './interfaces/ticket.interface';
export declare class TicketsService {
    private tickets;
    findAll(): Ticket[];
    findOne(id: string): Ticket;
}
