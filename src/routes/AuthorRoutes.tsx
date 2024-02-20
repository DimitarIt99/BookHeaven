import { Route, Routes } from "react-router-dom";

import Author from "../components/author/Author";

function AuthorRoutes() {
  return (
    <Routes>
      <Route path="/author">
        <Route path="/details/" element={<Author />}></Route>
      </Route>
    </Routes>
  );
}

export default AuthorRoutes;
