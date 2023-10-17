import { IsString } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  readonly message: string;
}
