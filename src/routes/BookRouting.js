import { Route } from "react-router-dom";
import { Book } from "../components/book/Book";
import { BookList } from "../components/book/BookList";

function BookRouting() {
  return (
    <Route path="book">
      <Route path="/details/" element={<Book />} />
      <Route path="/list/" element={<BookList />} />
    </Route>
  );
}

export default BookRouting;
