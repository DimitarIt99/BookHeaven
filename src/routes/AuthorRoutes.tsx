import { Route, Routes } from "react-router-dom";

import Author from "../components/author/Author";

export function AuthorRoutes() {
  return (
    <Routes>
      <Route path="/details/" element={<Author />} />
    </Routes>
  );
}
