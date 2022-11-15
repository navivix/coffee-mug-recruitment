import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  // Price in pennies, for precision
  @IsInt()
  price: number;
}
