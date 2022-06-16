import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/author/entities/author.entity';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { SearchBookDto } from './dto/search-book.dto';
import { Book } from './entities/books.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async addbook(newbook: CreateBookDto) {
    try{
      this.authorRepository.findOneByOrFail({ aid: newbook.aid });
      this.categoryRepository.findOneByOrFail({ cid: newbook.cid });
    }
    catch{
      throw new HttpException(`Invalid Category id or Author id`, HttpStatus.BAD_REQUEST)
    }
    try{
      await this.booksRepository.save(newbook);
    }
    catch{
      throw new HttpException(`Database is empty or Book already exists`, HttpStatus.CONFLICT);
    }
    return {message : `SUCCESS!! New Book added`};
  }

  findAll() {
    return this.booksRepository.find();
  }

  async getbyfilter({ search, aid, cid }: SearchBookDto) {
    const repo = this.booksRepository.createQueryBuilder('book');
    let query = repo
      .leftJoinAndSelect('book.aid', 'author')
      .leftJoinAndSelect('book.cid', 'category')
      .select([
        'book.id',
        'book.name',
        'author.aname',
        'book.description',
        'category.cname',
      ])
      .andWhere('book.name ilike :searchText', { searchText: `%${search}%` });
      console.log({ search, aid, cid });
    if (!isNaN(parseInt(aid)) || aid.toLowerCase() != 'null') {
      query = query.andWhere('author.aid = :aid', { aid });
    }
    if (!isNaN(parseInt(cid)) || cid.toLowerCase() != 'null') {
      query = query.andWhere('category.cid = :cid', { cid });
    }
    const filteredBooks = await query.getMany();
    if (filteredBooks.length === 0) {
      throw new HttpException('0 books found', HttpStatus.NOT_FOUND);
    }
    return filteredBooks;
  }
}

