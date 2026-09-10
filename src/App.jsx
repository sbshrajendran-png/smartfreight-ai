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

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="main-content">

          {/* Header */}
          <Header />

          {/* All Pages */}
          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={<Dashboard />}
            />

            {/* Freight Forecast */}
            <Route
              path="/forecast"
              element={<FreightForecast />}
            />

            {/* Vessel Optimizer */}
            <Route
              path="/vessel"
              element={<VesselOptimizer />}
            />

            {/* Port Optimizer */}
            <Route
              path="/port"
              element={<PortOptimizer />}
            />

            {/* Cargo Demand */}
            <Route
              path="/cargo"
              element={<CargoDemand />}
            />

            {/* Risk Analysis */}
            <Route
              path="/risk"
              element={<RiskAnalysis />}
            />

            {/* AI Recommendations */}
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