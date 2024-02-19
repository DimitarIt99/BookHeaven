import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Book from "./components/book/Book";
import BookList from "./components/book/BookList";
import Author from "./components/author/Author";

import "./i18n";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/" element={<Book />} />
        <Route path="/book_list/" element={<BookList />} />
        <Route path="author/" element={<Author />} />
      </Routes>
    </>
  );
}

export default App;
