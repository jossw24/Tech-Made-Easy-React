import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetails from "./pages/ModuleDetails";
import HealthModule from "./pages/HealthModule";
import LiteracyModule from "./pages/LiteracyModule";
import SafetyModule from "./pages/SafetyModule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modules-page" element={<ModulesPage/>} />
      <Route path="/module-details/:moduleId" element={<ModuleDetails/>}/>
      <Route path="/literacy" element={<LiteracyModule/>} />
      <Route path="/health" element={<HealthModule/>} />
      <Route path="/safety" element={<SafetyModule/>} />
    </Routes>
  );
}

export default App;