import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import FreightForecast from "./pages/FreightForecast";
import VesselOptimizer from "./pages/VesselOptimizer";
import PortOptimizer from "./pages/PortOptimizer";
import CargoDemand from "./pages/CargoDemand";
import RiskAnalysis from "./pages/RiskAnalysis";
import AIRecommendations from "./pages/AIRecommendations";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Sidebar />

        <main className="main-content">

          <Header />

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route
              path="/forecast"
              element={<FreightForecast />}
            />

            <Route
              path="/vessel"
              element={<VesselOptimizer />}
            />

            <Route
              path="/port"
              element={<PortOptimizer />}
            />

            <Route
              path="/cargo"
              element={<CargoDemand />}
            />

            <Route
              path="/risk"
              element={<RiskAnalysis />}
            />

            <Route
              path="/recommendations"
              element={<AIRecommendations />}
            />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;