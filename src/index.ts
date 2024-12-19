import UserLogin from "./user/service/UserLogin.ts";
import UserRegister from "./user/service/UserRegister.ts";

const register = new UserRegister();

register.execute({
  name: "Thiago",
  email: "thiago@gmail.com",
  password: "123456",
});

const login = new UserLogin();

const user = await login.execute({
  email: "thiago@gmail.com",
  password: "123456",
});

console.log(user);
