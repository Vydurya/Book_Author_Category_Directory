import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SearchBookDto {
  @IsNotEmpty()
  @IsString()
  search: string;

  @IsNotEmpty()
  @IsString()
  aid: string;

  @IsNotEmpty()
  @IsString()
  cid: string;
}