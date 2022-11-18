import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as UuidV4 } from 'uuid';
import {
  Auth,
  AuthDocument,
} from 'src/modules/launch/infrastructure/repository/entities/auth..entites';

@Injectable()
export class AuthMongoRepository {
  constructor(
    @InjectModel(Auth.name)
    private readonly authModel: Model<AuthDocument>,
  ) {}

  async create(data: any): Promise<any> {
    const newUser = {
      id: UuidV4(),
      username: data.username,
      email: data.email,
      password: data.password,
    };

    await this.authModel.create(newUser);

    return newUser;
  }

  async findOnePerson(email: string): Promise<any> {
    const user = await this.authModel.findOne({
      email: email,
    });

    if (!user) {
      return;
    }

    return user;
  }
}
