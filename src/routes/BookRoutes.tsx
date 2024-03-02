import { Route, Routes } from "react-router-dom";

import Book from "../components/book/Book";
import BookList from "../components/book/BookList";

export function BookRoutes() {
  return (
    <Routes>
      <Route path="details" element={<Book />} />
      <Route path="list" element={<BookList />} />
    </Routes>
  );
}
