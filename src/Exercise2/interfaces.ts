export interface AuthorI {
  id: number;
  name: string;
}

export interface BookI {
  id: number;
  title: string;
  author: AuthorI;
}

export interface UserI {
  id: number;
  email: string;
  nickname: string;
  favorite_books: BookI[];
}

export interface UsersContextTypeI {
  users: UserI[];
  setUsers: React.Dispatch<React.SetStateAction<UserI[]>>;
}

export interface AuthorI {
  id: number;
  name: string;
}

export interface BookI {
  id: number;
  title: string;
  author: AuthorI;
  favorited_at?: string;
}

export interface BooksContextTypeI {
  books: BookI[];
  setBooks: React.Dispatch<React.SetStateAction<BookI[]>>;
}
