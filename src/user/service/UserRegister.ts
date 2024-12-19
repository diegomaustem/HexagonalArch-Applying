import CasoDeUso from "../../shared/CasoDeUso";
import UserCollection from "../data/UserCollection";
import User from "../model/User";

export default class UserRegister implements CasoDeUso<Required<User>, void> {
  async execute(user: Required<User>): Promise<void> {
    const passwordCript = user.password.split("").reverse().join("");
    const userCript = { ...user, passwordCript };

    const collection = new UserCollection();
    await collection.addUser(userCript);
  }
}
