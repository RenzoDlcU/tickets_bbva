"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedesController = void 0;
const common_1 = require("@nestjs/common");
const sedes_service_1 = require("./sedes.service");
const find_sedes_dto_1 = require("./dto/find-sedes.dto");
let SedesController = class SedesController {
    constructor(sedesService) {
        this.sedesService = sedesService;
    }
    findOne(body) {
        return this.sedesService.findOne(body);
    }
};
__decorate([
    (0, common_1.Get)('tickets'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_sedes_dto_1.FindSedeDTO]),
    __metadata("design:returntype", void 0)
], SedesController.prototype, "findOne", null);
SedesController = __decorate([
    (0, common_1.Controller)('api/v1/sedes'),
    __metadata("design:paramtypes", [sedes_service_1.SedesService])
], SedesController);
exports.SedesController = SedesController;
//# sourceMappingURL=sedes.controller.js.map