import { IsString, IsInt } from 'class-validator';

export class SendMailDto {
  @IsString()
  to: string;

  @IsString()
  data: any;

  @IsString()
  from: string;
}
