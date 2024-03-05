import { Route, Routes } from "react-router-dom";

import LoginUser from "../components/user/LoginUser";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginUser />} />
    </Routes>
  );
}
