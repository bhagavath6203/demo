import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("please enter all the details");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
      e,
      name,
      role,
      email,
      password,
      phone
      })
    );
  } catch (error) {
    console.log(error);
  }
};
