import { SedesService } from './sedes.service';
import { FindSedeDTO } from './dto/find-sedes.dto';
export declare class SedesController {
    private readonly sedesService;
    constructor(sedesService: SedesService);
    findOne(body: FindSedeDTO): import("./interfaces/sede.interface").Sede;
}
