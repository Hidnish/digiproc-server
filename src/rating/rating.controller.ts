import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RatingService } from './rating.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateRatingDto } from './dto/create-rating.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { TokenPayload } from 'src/auth/types/token-payload.interface';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  @UseInterceptors(NoFilesInterceptor())
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() body: CreateRatingDto,
    @CurrentUser() user: TokenPayload,
  ) {
    const userId = user.userId;
    const rating = await this.ratingService.upsertRating(userId, body);
    return rating;
  }
}
