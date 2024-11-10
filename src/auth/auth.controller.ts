import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { Response } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@CurrentUser() user: User, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(user, res);
  }
}
