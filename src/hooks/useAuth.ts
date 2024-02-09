import { useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");

    if (user) {
      console.log(user);
      console.log("Setting user");
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { login, logout };
};
