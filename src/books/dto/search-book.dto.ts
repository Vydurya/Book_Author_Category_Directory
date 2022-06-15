import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SearchBookDto {
  @IsNotEmpty()
  @IsString()
  search: string;

  @IsNotEmpty()
  @IsNumber()
  aid: string;

  @IsNotEmpty()
  @IsNumber()
  cid: string;
}