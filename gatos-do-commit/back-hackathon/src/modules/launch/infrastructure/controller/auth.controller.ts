import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from 'src/modules/launch/infrastructure/dto/create-user.dto';
import { LoginDto } from 'src/modules/launch/infrastructure/dto/login.dto';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  async login(
    @Res() response: Response,
    @Body() body: LoginDto,
  ): Promise<Response> {
    const result = await this.authService.login(body.email);

    return response.status(HttpStatus.OK).json(result);
  }

  @Post('/create-user')
  async createUser(
    @Res() response: Response,
    @Body() body: CreateUserDto,
  ): Promise<Response> {
    const result = await this.authService.createUser(
      body.username,
      body.password,
      body.email,
    );

    return response.status(HttpStatus.OK).json(result);
  }
}
