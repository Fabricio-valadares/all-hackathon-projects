import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Transaction } from "@prisma/client";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { FindAllTransactionsParams } from "./dto/find-all-transactions.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";

@Injectable()
export class TransactionsService {
  constructor(private readonly _prismaService: PrismaService) {}

  async create(
    userId: number,
    createTransactionDto: CreateTransactionDto,
  ): Promise<void> {
    await this._prismaService.transaction.create({
      data: { userId, ...createTransactionDto },
    });
  }

  async findAll(
    userId: number,
    options: FindAllTransactionsParams,
  ): Promise<{ records: Transaction[]; count: number }> {
    const { type, end_date, initial_date } = options;
    const where: any = {
      userId,
      AND: [
        type && { type },
        (initial_date || end_date) && {
          created_at: {
            gte: initial_date ?? undefined,
            lte: end_date ?? undefined,
          },
        },
      ],
    };

    const [count, records] = await this._prismaService.$transaction([
      this._prismaService.transaction.count({ where }),
      this._prismaService.transaction.findMany({
        orderBy: { created_at: "asc" },
        where,
      }),
    ]);

    return { count, records };
  }

  async findOne(userId: number, cod: number): Promise<Transaction> {
    const foundTransaction = await this._prismaService.transaction.findUnique({
      where: { cod_userId: { userId, cod } },
    });
    if (!foundTransaction) throw new NotFoundException("transaction not found");
    return foundTransaction;
  }

  async update(
    userId: number,
    cod: number,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<void> {
    const foundTransaction = await this.findOne(userId, cod);
    if (!foundTransaction) throw new NotFoundException("transaction not found");

    await this._prismaService.transaction.update({
      where: { cod_userId: { cod, userId } },
      data: updateTransactionDto,
    });
  }

  async remove(userId: number, cod: number) {
    const foundTransaction = await this.findOne(userId, cod);
    if (!foundTransaction) throw new NotFoundException("transaction not found");

    await this._prismaService.transaction.delete({
      where: { cod_userId: { cod, userId } },
    });
  }
}
