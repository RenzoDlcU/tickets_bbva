import { Controller, Post, Body} from '@nestjs/common';
import { SedesService } from './sedes.service';
import { FindSedeDTO } from './dto/find-sedes.dto';

@Controller('api/v1/sedes')
export class SedesController {
  constructor(private readonly sedesService: SedesService) {}

  @Post('tickets')
  findOne(@Body() body: FindSedeDTO) {
    return this.sedesService.findOne(body);
  }

}
