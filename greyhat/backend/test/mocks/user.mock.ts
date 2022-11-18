import { User } from "@prisma/client";
import { faker } from "@faker-js/faker";

export const MockUser = (fields?: Partial<User>): User => {
  const now = new Date();
  return {
    id: 99,
    created_at: now,
    updated_at: now,
    password_hash: "hashed_value",
    email: faker.internet.email(),
    cpf: "123443554635",
    name: "Nome do usuario",
    ...fields,
  };
};
