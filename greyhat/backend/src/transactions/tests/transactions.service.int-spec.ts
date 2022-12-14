import { AppModule } from "@/app.module";
import { PrismaService } from "@/prisma/prisma.service";
import { UnauthorizedException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { TransactionTypes } from "@prisma/client";
import { MockTransaction, MockUser } from "@test/mocks";
import * as bcrypt from "bcrypt";
import { CreateTransactionDto } from "../dto/create-transaction.dto";
import { UpdateTransactionDto } from "../dto/update-transaction.dto";
import { TransactionsService } from "../transactions.service";

const faked_users = [
  MockUser({
    cpf: "234324",
    email: "email@test.com.br",
    name: "Nome test",
    password_hash: bcrypt.hashSync("1234", 12),
  }),
];

const faked_transactions = [
  MockTransaction({
    cod: 55,
    currency: "BRL",
    title: "Entrada teste",
    type: TransactionTypes.INBOUND,
    userId: faked_users[0].id,
    value: 300,
  }),
  MockTransaction({
    cod: 56,
    currency: "BRL",
    title: "Entrada teste 2",
    type: TransactionTypes.INBOUND,
    userId: faked_users[0].id,
    value: 500,
  }),
  MockTransaction({
    cod: 57,
    currency: "BRL",
    title: "Sainda teste",
    type: TransactionTypes.OUTBOUND,
    userId: faked_users[0].id,
    value: 300,
  }),
];

describe("auth services integration test", () => {
  let sut: TransactionsService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    sut = module.get(TransactionsService);
    prisma = module.get(PrismaService);
    await prisma.user.deleteMany({});
    await prisma.user.createMany({ data: faked_users });
  });

  beforeEach(async () => {
    await prisma.transaction.deleteMany({});
    await prisma.transaction.createMany({ data: faked_transactions });
  });

  describe("create", () => {
    const makeTransactionDto = (
      fields?: Partial<CreateTransactionDto>,
    ): CreateTransactionDto => {
      return {
        currency: "BRL",
        title: "Titulo teste",
        description: "",
        type: TransactionTypes.OUTBOUND,
        value: 300,
        ...fields,
      };
    };

    let count = 0;

    beforeEach(async () => {
      count = await prisma.transaction.count({});
    });

    it("Deve criar uma nova transa????o", async () => {
      await sut.create(faked_users[0].id, makeTransactionDto());

      const recount = await prisma.transaction.count({});
      expect(recount).toBe(count + 1);
    });
  });

  describe("findAll", () => {
    it("Deve retornar todas as transa????es", async () => {
      const result = await sut.findAll(faked_users[0].id);
      expect(result).toHaveLength(faked_transactions.length);
    });
  });

  describe("findOne", () => {
    it("Deve retornar nulo se transa????o n??o existir", async () => {
      const result = await sut.findOne(faked_users[0].id, -1);
      expect(result).toBe(null);
    });

    it("Deve retornar transa????o solicitada", async () => {
      const result = await sut.findOne(
        faked_users[0].id,
        faked_transactions[0].cod,
      );
      expect(result).toEqual({ ...faked_transactions[0] });
    });
  });

  describe("update", () => {
    const makeTransactionDto = (
      fields?: Partial<UpdateTransactionDto>,
    ): UpdateTransactionDto => {
      return {
        currency: "BRL",
        title: "Titulo teste",
        description: "",
        type: TransactionTypes.OUTBOUND,
        value: 300,
        ...fields,
      };
    };

    let count = 0;

    beforeEach(async () => {
      count = await prisma.transaction.count({});
    });

    it("Deve atualizar transa????o existente", async () => {
      await sut.update(
        faked_users[0].id,
        faked_transactions[0].cod,
        makeTransactionDto(),
      );
      const recount = await prisma.transaction.count({});
      expect(recount).toBe(count);
    });
  });

  describe("remove", () => {
    let count = 0;

    beforeEach(async () => {
      count = await prisma.transaction.count({});
    });

    it("Deve remover transa????o", async () => {
      await sut.remove(faked_users[0].id, faked_transactions[0].cod);
      const recount = await prisma.transaction.count({});
      expect(recount).toBe(count - 1);
    });
  });
});
