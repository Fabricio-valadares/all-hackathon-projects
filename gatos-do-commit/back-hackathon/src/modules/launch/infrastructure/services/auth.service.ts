import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IAuth } from 'src/modules/launch/domain/interfaces/auth.inteface';
import { AuthMongoRepository } from 'src/modules/launch/infrastructure/repository/auth.repository';

@Injectable()
export class AuthService implements IAuth {
  constructor(
    @Inject(AuthMongoRepository)
    private readonly authMongoRepository: AuthMongoRepository,
  ) {}

  async createUser(
    username: string,
    password: string,
    email: string,
  ): Promise<void> {
    try {
      await this.authMongoRepository.create({ username, password, email });
    } catch {
      throw new HttpException(
        { reason: 'failed to create person' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async login(email: string): Promise<void> {
    try {
      return await this.authMongoRepository.findOnePerson(email);
    } catch {
      throw new HttpException(
        { reason: 'failed to login' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
