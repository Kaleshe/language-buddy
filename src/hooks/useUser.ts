import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  dob: string;
  authToken?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const getUser = async ({ username, password }) => {
    try {
      const { data } = await axios.get("http://localhost:3000/users", {
        params: { username: username, password: password },
      });

      if (data[0]?.username) {
        const { password, ...restOfUser } = data[0];

        return { ...restOfUser, authToken: "TOKEN" };
      }

      throw new Error("Something went wrong");
    } catch (err) {
      console.error(err);
    }
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser, getUser };
};
