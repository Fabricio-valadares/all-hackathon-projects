import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class SigninDto {
  @IsEmail({}, { message: "Deve conter um Email válido!" })
  @IsNotEmpty({ message: "Email é obrigatório!" })
  email: string;

  @IsString({ message: "Deve conter uma senha válida!" })
  @IsNotEmpty({ message: "Senha é obrigatório!" })
  password: string;
}
