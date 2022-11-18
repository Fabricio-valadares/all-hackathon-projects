import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop()
  id: string;

  @Prop()
  email: string;

  @Prop()
  username: string;

  @Prop()
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
