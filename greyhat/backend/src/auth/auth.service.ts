import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { SignupDto } from "./dto/signup.dto";
import * as bcrypt from "bcrypt";
import { SigninDto } from "./dto/signin.dto";
import { Prisma } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { AuthTokenDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async signin(dto: SigninDto): Promise<AuthTokenDto> {
    const { email, password } = dto;

    const user = await this._prismaService.user.findUnique({
      where: { email },
    });

    if (!user) throw new ForbiddenException("wrong credentials");

    const isPasswordValid: boolean = bcrypt.compareSync(
      password,
      user.password_hash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const token = await this.signToken(user.id, user.email);

    return { access_token: token };
  }

  async signup(dto: SignupDto): Promise<AuthTokenDto> {
    const { password, ...rest } = dto;

    try {
      const user = await this._prismaService.user.create({
        data: {
          ...rest,
          password_hash: bcrypt.hashSync(password, 12),
        },
      });

      const token = await this.signToken(user.id, user.email);
      return { access_token: token };
    } catch (err: any) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
          case "P2002":
            throw new ForbiddenException(
              `Já existe um usuario para esse ${err.meta.target[0]}`,
            );
        }
        throw err;
      }
    }
  }

  private signToken(userId: number, email: string): Promise<string> {
    const payload = { sub: userId, email };

    return this.jwt.signAsync(payload, {
      expiresIn: "1 year",
      secret: this.config.get("JWT_SECRET"),
    });
  }
}
