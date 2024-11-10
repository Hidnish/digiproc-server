import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProducts() {
    const result = await this.prismaService.$queryRaw<
      Array<{ [key: string]: any; reviews: number | null }>
    >`
      SELECT p.*, AVG(r.value) AS rating
      FROM "Product" p
      LEFT JOIN "Rating" r ON r."productId" = p.id
      GROUP BY p.id
    `;

    // Format the response to ensure `reviews` is set to 0 if there are no reviews for a product
    return result.map((product) => ({
      ...product,
      reviews: product.reviews || 0, // If no reviews, set average to 0
    }));
  }
}
