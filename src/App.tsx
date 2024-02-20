import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GeneralRouting } from "./routes/GeneralRouting";

import "./i18n";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <GeneralRouting />
      </Routes>
    </>
  );
}

export default App;
