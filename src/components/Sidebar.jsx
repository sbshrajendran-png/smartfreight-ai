import {
  LayoutDashboard,
  TrendingUp,
  Ship,
  Anchor,
  Package,
  AlertTriangle,
  Brain
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="logo">
        <div className="logo-icon">⚓</div>

        <div>
          <h2>SmartFreight</h2>
          <span>AI Logistics</span>
        </div>
      </div>


      {/* MENU */}
      <nav className="menu">

        <p className="menu-title">MAIN MENU</p>

        {/* Dashboard */}
        <a href="/" className="menu-item">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>


        {/* Freight Forecast */}
        <a href="/forecast" className="menu-item">
          <TrendingUp size={20} />
          <span>Freight Forecast</span>
        </a>


        {/* Vessel Optimizer */}
        <a href="/vessel" className="menu-item">
          <Ship size={20} />
          <span>Vessel Optimizer</span>
        </a>


        {/* Port Optimizer */}
        <a href="/port" className="menu-item">
          <Anchor size={20} />
          <span>Port Optimizer</span>
        </a>


        <p className="menu-title">ANALYTICS</p>


        {/* Cargo Demand */}
        <a href="/cargo" className="menu-item">
          <Package size={20} />
          <span>Cargo Demand</span>
        </a>


        {/* Risk Analysis */}
        <a href="/risk" className="menu-item">
          <AlertTriangle size={20} />
          <span>Risk Analysis</span>
        </a>


        {/* AI Recommendations */}
        <a href="/recommendations" className="menu-item">
          <Brain size={20} />
          <span>AI Recommendations</span>
        </a>

      </nav>


      {/* BOTTOM STATUS */}
      <div className="sidebar-bottom">

        <div className="status-dot"></div>

        <div>
          <strong>System Online</strong>
          <small>AI Engine Active</small>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;