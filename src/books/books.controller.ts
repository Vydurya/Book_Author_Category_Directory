import { Controller, Get, Post, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { SearchBookDto } from './dto/search-book.dto';

@Controller('createBooks')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() newbook: CreateBookDto) {
    return this.booksService.addbook(newbook);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get('getAllBooksByFilter')
  getAllBooksByFilter(@Query() searchbook: SearchBookDto) {
    return this.booksService.getbyfilter(searchbook);
  }

}
