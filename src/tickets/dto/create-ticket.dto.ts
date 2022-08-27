import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  @IsNotEmpty()
  sedeId: number;

  @IsNumber()
  @IsNotEmpty()
  tipoAtencion: number;
}
