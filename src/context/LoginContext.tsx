import { createContext, useState } from "react";

interface CurrentUser {
  first_name: string;
  last_name: string;
  id: number;
}

const CurrentUserContext = createContext<CurrentUser | null>(null);

const CurrentUserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<CurrentUser>(null);
  return <CurrentUserContext.Provider>{children}</CurrentUserContext.Provider>;
};

export { CurrentUserProvider, CurrentUserContext };
