import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async verifyUser(email: string, password: string) {
    try {
      const user = await this.userService.getUser({ email });
      const isAuth = await bcrypt.compare(password, user.password);

      if (!isAuth) {
        throw new UnauthorizedException();
      }

      return user;
    } catch (err) {
      throw new UnauthorizedException('Invalid Credentails');
    }
  }
}
