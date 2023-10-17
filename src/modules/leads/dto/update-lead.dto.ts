import { IsString } from 'class-validator';

export class UpdateLeadDto {
  @IsString()
  readonly message: string;
}
