import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/books.entity';
import { Author } from 'src/author/entities/author.entity';
import { Category } from 'src/category/entities/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ Book, Author, Category])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
