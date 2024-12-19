import CasoDeUso from "../../shared/CasoDeUso";
import UserCollection from "../data/UserCollection";
import User from "../model/User";

export type UserLoginDTO = {
  email: string;
  password: string;
};
export default class UserLogin implements CasoDeUso<UserLoginDTO, User | null> {
  async execute(dto: UserLoginDTO): Promise<User | null> {
    const collection = new UserCollection();
    const user = await collection.findUser(dto.email);

    if (!user) return null;

    const passwordCript = dto.password.split("").reverse().join("");
    if (user.password !== passwordCript) return null;

    return {
      name: user.name,
      email: user.email,
    };
  }
}
