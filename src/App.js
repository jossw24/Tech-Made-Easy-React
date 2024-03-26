import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetails from "./pages/ModuleDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modules-page" element={<ModulesPage/>} />
      <Route path="/module-details" element={<ModuleDetails/>}/>
    </Routes>
  );
}

export default App;