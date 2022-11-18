import { AppModule } from "@/app.module";
import { PrismaService } from "@/prisma/prisma.service";
import { UnauthorizedException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { MockUser } from "@test/mocks";
import { AuthService } from "../auth.service";
import * as bcrypt from "bcrypt";
import { SignupDto } from "../dto/signup.dto";
import { isUndefined } from "util";

const faked_users = [
  MockUser({
    cpf: "234324",
    email: "email@test.com.br",
    name: "Nome test",
    password_hash: bcrypt.hashSync("1234", 12),
  }),
];

describe("auth services integration test", () => {
  let sut: AuthService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    sut = module.get(AuthService);
    prisma = module.get(PrismaService);
    await prisma.user.deleteMany({});
    await prisma.user.createMany({ data: faked_users });
  });

  describe("singin", () => {
    it("Deve jogar erro 401 se usuario nao existir", async () => {
      const result = sut.signin({
        email: "emailaqui",
        password: "qualquer",
      });
      await expect(result).rejects.toThrow(new UnauthorizedException());
    });

    it("Deve retornar 401 se senha nao bater", async () => {
      const result = sut.signin({
        email: faked_users[0].email,
        password: "qualquer",
      });
      await expect(result).rejects.toThrow(new UnauthorizedException());
    });

    it("Deve retornar usuario", async () => {
      const result = await sut.signin({
        email: faked_users[0].email,
        password: "1234",
      });
      expect(result).toEqual(faked_users[0]);
    });
  });

  describe("signup", () => {
    let count = 0;

    beforeEach(async () => {
      count = await prisma.user.count({});
    });

    const makeDto = (fields?: Partial<SignupDto>): SignupDto => {
      return {
        cpf: "1234564",
        email: "test_email@mail.com",
        name: "test_name",
        password: "test_password",
        ...fields,
      };
    };
    it("Deve jogar erro 401 se email já existir", async () => {
      const result = sut.signup(makeDto({ email: faked_users[0].email }));
      await expect(result).rejects.toThrow(
        new UnauthorizedException("Já existe um usuario para esse email"),
      );
    });
    it("Deve jogar erro 401 se cpf já existir", async () => {
      const result = sut.signup(makeDto({ cpf: faked_users[0].cpf }));
      await expect(result).rejects.toThrow(
        new UnauthorizedException("Já existe um usuario para esse cpf"),
      );
    });
    it("Deve Cadastrar usuario com sucesso", async () => {
      const result = await sut.signup(makeDto());
      expect(result).toBeFalsy();
      const recount = await prisma.user.count({});
      expect(recount).toBe(count + 1);
    });
  });
});
