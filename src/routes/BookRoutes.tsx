import { Route, Routes } from "react-router-dom";

import Book from "../components/book/Book";
import BookList from "../components/book/BookList";

function BookRoutes() {
  return (
    <Routes>
      <Route path="/book">
        <Route path="details" element={<Book />}></Route>
        <Route path="list" element={<BookList />}></Route>
      </Route>
    </Routes>
  );
}

export default BookRoutes;
