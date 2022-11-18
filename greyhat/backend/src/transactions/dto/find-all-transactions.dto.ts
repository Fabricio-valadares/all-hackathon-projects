import { TransactionTypes } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsOptional } from "class-validator";
export class FindAllTransactionsParams {
  @IsEnum(TransactionTypes)
  @IsOptional()
  readonly type?: TransactionTypes;

  @Type(() => Date)
  @IsOptional()
  readonly initial_date?: Date;

  @Type(() => Date)
  @IsOptional()
  readonly end_date?: Date;
}
