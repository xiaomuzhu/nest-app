import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBooksDto } from '../dtos/books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get(':id')
  findBook(@Param('id') id: number) {
    return this.booksService.getBooks(id);
  }

  @Post()
  async create(@Body() createCatDto: CreateBooksDto): Promise<{ id: number }> {
    return await this.booksService.createBooks(createCatDto);
  }
}
