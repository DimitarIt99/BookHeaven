import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import "./i18n";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <MainRoutes />
      </Routes>
    </>
  );
}

export default App;
