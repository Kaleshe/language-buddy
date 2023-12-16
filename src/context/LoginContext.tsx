import { createContext, useState } from "react";

interface CurrentUser {
  first_name: string;
  last_name: string;
  id: number;
}

const CurrentUserContext = createContext<CurrentUser | null>(null);

const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState<CurrentUser>(null);
  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserProvider, CurrentUserContext };
