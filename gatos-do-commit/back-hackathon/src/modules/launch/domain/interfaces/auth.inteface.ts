export interface IAuth {
  createUser(username: string, password: string, email: string): Promise<void>;
  login(email: string): Promise<void>;
}
