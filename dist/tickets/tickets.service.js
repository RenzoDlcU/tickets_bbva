"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let TicketsService = class TicketsService {
    constructor() {
        this.tickets = [
            {
                'id': (0, uuid_1.v4)(),
                'codigo': 'PLA00001',
                'hora': new Date(),
                'sedeId': 1,
                'tipoAtencionId': 1
            }
        ];
    }
    findAll() {
        return this.tickets;
    }
    findOne(id) {
        const ticket = this.tickets.find(t => t.id === id);
        if (!ticket)
            throw new common_1.NotFoundException(`Ticket with id '${id}' not found`);
        return ticket;
    }
};
TicketsService = __decorate([
    (0, common_1.Injectable)()
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map