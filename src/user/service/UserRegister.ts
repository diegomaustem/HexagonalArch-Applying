import CasoDeUso from "../../shared/CasoDeUso.ts";
import UserCollection from "../data/UserCollection.ts";
import User from "../model/User.ts";

export default class UserRegister implements CasoDeUso<Required<User>, void> {
  async execute(user: Required<User>): Promise<void> {
    const passwordCript = user.password.split("").reverse().join("");
    const userCript = { ...user, passwordCript };

    const collection = new UserCollection();
    await collection.addUser(userCript);
  }
}
