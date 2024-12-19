import User from "../model/User.ts";

export default class UserCollection {
  static readonly users: User[] = [];

  async addUser(user: User): Promise<void> {
    UserCollection.users.push(user);
  }

  async findUser(email: string): Promise<User | null> {
    return UserCollection.users.find((user) => user.email === email) ?? null;
  }
}
