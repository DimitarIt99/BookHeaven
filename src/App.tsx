import Navbar from "./components/Navbar";
import { MainRoutes } from "./routes/MainRoutes";
import "./utils/i18n";

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  );
}

export default App;
