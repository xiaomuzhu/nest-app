import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, default: '' })
  name: string;

  @Column({ length: 10, default: '' })
  author: string;
}
