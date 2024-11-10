import { Transform } from 'class-transformer';
import { IsInt, IsPositive, Max, Min } from 'class-validator';

export class CreateRatingDto {
  @IsInt()
  @IsPositive()
  @Transform(({ value }) => {
    return Number(value);
  })
  productId: number;

  @IsPositive()
  @Min(1)
  @Max(5)
  @Transform(({ value }) => {
    return Number(value);
  })
  value: number;
}
