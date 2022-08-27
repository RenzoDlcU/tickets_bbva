import { Ticket } from "./ticket.interface";
export interface Sede {
    id: string;
    aforo: number;
    tickets: Ticket[];
}
