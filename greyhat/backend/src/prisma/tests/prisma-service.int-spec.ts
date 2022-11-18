import { AppModule } from "@/app.module";
import { PrismaService } from "@/prisma/prisma.service";
import { Test, TestingModule } from "@nestjs/testing";
import { MockUser } from "@test/mocks";

const faked_users = [
  MockUser({
    cpf: "234324",
    email: "email@test.com.br",
    name: "Nome test",
  }),
];

describe("prisma integration test", () => {
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    prisma = module.get(PrismaService);
    await prisma.user.deleteMany({});
    await prisma.user.createMany({ data: faked_users });
  });

  describe("find user", () => {
    describe("Should find user by email", () => {
      it("Deve retornar nulo caso usuario não exista", async () => {
        const result = await prisma.user.findUnique({
          where: { email: "email@invalido.com" },
        });
        expect(result).toBe(null);
      });

      it("Deve retornar usuario", async () => {
        const result = await prisma.user.findUnique({
          where: { email: faked_users[0].email },
        });
        expect(result).toEqual(faked_users[0]);
      });
    });

    describe("create user", () => {
      let count = 0;

      beforeEach(async () => {
        count = await prisma.user.count({});
      });

      it("Deve criar um novo usuario com sucesso!", async () => {
        await prisma.user.create({
          data: MockUser({ id: undefined }),
        });
        const recount = await prisma.user.count({});
        expect(recount).toBe(count + 1);
      });

      it("Deve jogar erro se email ja existir", async () => {
        const result = prisma.user.create({
          data: MockUser({
            id: undefined,
            email: faked_users[0].email,
          }),
        });

        await expect(result).rejects.toThrow();
        const recount = await prisma.user.count({});
        expect(recount).toBe(count);
      });
    });
  });
});
