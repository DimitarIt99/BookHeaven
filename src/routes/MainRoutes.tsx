import { Route, Routes } from "react-router-dom";

import AuthorRoutes from "./AuthorRoutes";
import BookRoutes from "./BookRoutes";
import UserRoutes from "./UserRoutes";
import Home from "../components/Home";
import NotFound from "../components/general/NotFound";

function MainRoutes() {
  return (
    <Routes>
      <AuthorRoutes />
      <BookRoutes />
      <UserRoutes />
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default MainRoutes;
