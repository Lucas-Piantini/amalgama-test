import { createContext, useContext, useState, ReactNode } from "react";
import { BookI, BooksContextTypeI } from "../interfaces";

const BooksContext = createContext<BooksContextTypeI | undefined>(undefined);

export const BooksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<BookI[]>([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = (): BooksContextTypeI => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};
