import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';


export class FindSedeDTO {
    @IsString()
    @IsNotEmpty()
    readonly sedeId: string;

    @IsNumber()
    @Min(2)
    @IsNotEmpty()
    readonly aforo: number;
}
