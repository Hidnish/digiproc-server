import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
  constructor(private readonly prismaService: PrismaService) {}
  async upsertRating(userId: number, { productId, value }: CreateRatingDto) {
    const rating = await this.prismaService.rating.upsert({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      update: {
        value,
      },
      create: {
        userId,
        productId,
        value,
      },
    });

    return rating;
  }
}
