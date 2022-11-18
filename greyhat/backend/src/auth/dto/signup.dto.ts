import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class SignupDto {
  @IsString({ message: "Deve conter uma CPF válido!" })
  @IsNotEmpty({ message: "CFP é obrigatório!" })
  cpf: string;

  @IsEmail({}, { message: "Deve conter um Email válido!" })
  @IsNotEmpty({ message: "Email é obrigatório!" })
  email: string;

  @IsString({ message: "Deve conter uma Nome válido!" })
  @IsNotEmpty({ message: "Nome é obrigatório!" })
  name: string;

  @IsString({ message: "Deve conter uma senha válida!" })
  @IsNotEmpty({ message: "Senha é obrigatório!" })
  password: string;
}
