import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './books/entities/books.entity';
import { BooksModule } from './books/books.module';
import { AuthorModule } from './author/author.module';
import { Author } from './author/entities/author.entity';
import { Category } from './category/entities/category.entity';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sql@26',
      database: 'Library',
      entities: [ Book, Author, Category ],
      synchronize: true,
    }),
    BooksModule,
    AuthorModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
