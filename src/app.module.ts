import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    ProductsModule,
    RatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
