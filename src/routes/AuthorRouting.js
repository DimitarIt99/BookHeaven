import { Route } from "react-router-dom";
import { Author } from "./components/author/Author";

function AuthorRouting() {
  return (
    <Route path="author">
      <Route path="/details/" element={<Author />} />
    </Route>
  );
}

export default AuthorRouting;
