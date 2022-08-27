import { Sede } from './interfaces/sede.interface';
import { Ticket } from './interfaces/ticket.interface';
export declare class SedesService {
    findOne(body: any): Sede;
    createRandomTickets(aforo: number, sedeId: string): Ticket[];
    getRandom(min: any, max: any): number;
}
