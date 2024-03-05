import { Route, Routes } from "react-router-dom";

import { AuthorRoutes } from "./AuthorRoutes";
import { BookRoutes } from "./BookRoutes";
import { UserRoutes } from "./UserRoutes";
import Home from "../components/Home";
import NotFound from "../components/general/NotFound";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="book/*" element={<BookRoutes />} />
      <Route path="author/*" element={<AuthorRoutes />} />
      <Route path="user/*" element={<UserRoutes />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
