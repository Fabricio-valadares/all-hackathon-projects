import { Transaction, TransactionTypes } from "@prisma/client";
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";

export class CreateTransactionDto
  implements Omit<Transaction, "created_at" | "updated_at" | "cod" | "userId">
{
  @IsString({ message: "Título Inválido!" })
  @IsNotEmpty({ message: "Título é obrigatório!" })
  title: string;

  @IsString({ message: "Descrição Inválida!" })
  @IsNotEmpty({ message: "Descrição é obrigatória!" })
  @IsOptional()
  description: string;

  @IsString({ message: "Moeda Inválida!" })
  @IsNotEmpty({ message: "Moeda é obrigatória!" })
  currency: string;

  @IsNumber({}, { message: "Deve ser um valor válido!" })
  @Type(() => Number)
  value: number;

  @IsEnum(TransactionTypes, {
    message: "Defina a transação como Entrada ou Saída",
  })
  type: TransactionTypes;
}
