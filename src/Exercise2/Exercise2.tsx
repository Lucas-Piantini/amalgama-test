import { useEffect } from "react";
import { useBooks } from "./Hooks/UseBooks";
import { useUsers } from "./Hooks/UseUsers";

export const Exercise2 = () => {
  const { books, setBooks } = useBooks();
  const { users, setUsers } = useUsers();

  useEffect(() => {
    const booksData = [
      {
        id: 1,
        title: "Clean Code",
        author: {
          id: 1,
          name: "Uncle Bob",
        },
      },
      {
        id: 2,
        title: "Clean Architecture",
        author: {
          id: 1,
          name: "Uncle Bob",
        },
      },
    ];

    setBooks(booksData);

    const usersData = [
      {
        id: 1,
        email: "chano@amalgama.co",
        nickname: "Chano",
        favorite_books: [
          {
            id: 1,
            title: "Clean Code",
            favorited_at: "2024-01-01",
            author: { id: 1, name: "Uncle Bob" },
          },
        ],
      },
      {
        id: 2,
        email: "sebastian@amalgama.co",
        nickname: "Biche",
        favorite_books: [
          {
            id: 1,
            title: "Clean Code",
            favorited_at: "2024-06-30",
            author: { id: 1, name: "Uncle Bob" },
          },
          {
            id: 2,
            title: "Clean Architecture",
            favorited_at: "2024-12-31",
            author: { id: 1, name: "Uncle Bob" },
          },
        ],
      },
    ];
    setUsers(usersData);
  }, [setBooks, setUsers]);

  console.log("users: ", users);
  console.log("books: ", books);
  return <></>;
};
