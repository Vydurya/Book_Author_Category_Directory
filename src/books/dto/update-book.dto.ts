import { IsNotEmpty, IsString } from 'class-validator';

export class BookDto {
  @IsString()
  search: string;

  @IsNotEmpty()
  @IsString()
  aid: string;

  @IsNotEmpty()
  @IsString()
  cid: string;
}