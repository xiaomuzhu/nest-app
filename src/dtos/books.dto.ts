import { IsString } from 'class-validator';

export class CreateBooksDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly author: string;
}
