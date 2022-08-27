import { TicketsService } from './tickets.service';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    findAll(): import("./interfaces/ticket.interface").Ticket[];
    findOne(id: string): import("./interfaces/ticket.interface").Ticket;
}
