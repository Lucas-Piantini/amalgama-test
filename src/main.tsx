import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BooksProvider } from "./Exercise2/Hooks/UseBooks.tsx";
import { UsersProvider } from "./Exercise2/Hooks/UseUsers.tsx";

createRoot(document.getElementById("root")!).render(
  <BooksProvider>
    <UsersProvider>
      <App />
    </UsersProvider>
  </BooksProvider>
);
