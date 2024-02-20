import { Route, Routes } from "react-router-dom";

import LoginUser from "../components/user/LoginUser";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/user">
        <Route path="/login" element={<LoginUser />}></Route>
      </Route>
    </Routes>
  );
}

export default UserRoutes;
