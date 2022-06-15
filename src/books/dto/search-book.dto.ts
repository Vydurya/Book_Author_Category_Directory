import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SearchBookDto {
  @IsString()
  @IsNotEmpty()
  search: string;

  @IsNotEmpty()
  @IsNumber()
  aid: string;

  @IsNotEmpty()
  @IsNumber()
  cid: string;
}