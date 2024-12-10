import { createContext, useContext, useState, ReactNode } from "react";
import { UsersContextTypeI, UserI } from "../interfaces";

const UsersContext = createContext<UsersContextTypeI | undefined>(undefined);

export const UsersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<UserI[]>([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = (): UsersContextTypeI => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};
