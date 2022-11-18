import { PrismaClient, User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { MakeTransactions } from "./transactions";
const prisma = new PrismaClient({
  datasources: {
    db: { url: process.env.DATABASE_URL },
  },
});

const users: Omit<User, "created_at" | "updated_at">[] = [
  {
    id: 1,
    cpf: "16855177735",
    name: "Zé",
    password_hash: bcrypt.hashSync("123456", 12),
    email: "ze_email@mail.com",
  },
];

async function main() {
  const transactions = MakeTransactions(users[0].id, 30, 336);
  await prisma.transaction.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.user.createMany({ data: users });
  await prisma.transaction.createMany({ data: transactions });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("done", process.env.DATABASE_URL);
    await prisma.$disconnect();
  });
