import { AppValidationPipe } from "@/presentation/validation-pipe";
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from "@nestjs/common";
import { User } from "@prisma/client";
import { AuthService } from "./auth.service";
import { GetUser } from "./decorator/get.user.decorator";
import { SigninDto } from "./dto/signin.dto";
import { SignupDto } from "./dto/signup.dto";
import { JwtGuard } from "./guard";

@Controller("auth")
@UseInterceptors(ClassSerializerInterceptor)
@UsePipes(AppValidationPipe())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  @HttpCode(HttpStatus.OK)
  signin(@Body() dto: SigninDto) {
    return this.authService.signin(dto);
  }

  @Post("signup")
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(200)
  @UseGuards(JwtGuard)
  @Get("verify")
  verify(@GetUser() user: User) {
    return user;
  }
}
