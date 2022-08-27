"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedesService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let SedesService = class SedesService {
    findOne(body) {
        let sede = {
            "id": body.sedeId,
            "aforo": body.aforo,
            "tickets": this.createRandomTickets(body.aforo, body.sedeId)
        };
        return sede;
    }
    createRandomTickets(aforo, sedeId) {
        let tickets = [];
        const since = aforo > 8 ? 8 : aforo - 1;
        for (let i = 1; i <= (this.getRandom(since, aforo)); i++) {
            const tipoAtencionId = this.getRandom(1, 2);
            tickets.push({
                id: (0, uuid_1.v4)(),
                codigo: tipoAtencionId === 1 ? `PLA${i.toString()}` : `VEN${i.toString()}`,
                hora: new Date(),
                sedeId,
                tipoAtencionId: tipoAtencionId
            });
        }
        return tickets;
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ;
};
SedesService = __decorate([
    (0, common_1.Injectable)()
], SedesService);
exports.SedesService = SedesService;
//# sourceMappingURL=sedes.service.js.map