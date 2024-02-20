import { Route, Routes } from "react-router-dom";
import { BookRouting } from "./BookRouting";
import { AuthorRouting } from "./AuthorRouting";
import { Home } from "../Home";
import { NotFound } from "../general/NotFound";

function GeneralRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <BookRouting />
      <AuthorRouting />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default GeneralRouting;
