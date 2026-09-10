import {
  TrendingUp,
  Package,
  Ship,
  Anchor,
  DollarSign,
} from "lucide-react";

import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Welcome Section */}

      <div className="welcome">
        <div>
          <h2>Welcome to SmartFreight AI 🚢</h2>

          <p>
            Intelligent freight forecasting and maritime
            logistics optimization platform.
          </p>
        </div>

        <button className="forecast-btn">
          Generate Forecast
        </button>
      </div>


      {/* Statistics */}

      <div className="stats-grid">

        <StatCard
          title="Current Freight Rate"
          value="$25.40"
          change="+4.8%"
          description="per metric ton"
          icon={<TrendingUp size={24} />}
        />

        <StatCard
          title="Predicted Freight Rate"
          value="$28.70"
          change="+13.0%"
          description="Next 30 days"
          icon={<TrendingUp size={24} />}
        />

        <StatCard
          title="Cargo Demand"
          value="52,000 T"
          change="+8.4%"
          description="Forecasted requirement"
          icon={<Package size={24} />}
        />

        <StatCard
          title="Recommended Vessel"
          value="50K DWT"
          change="94%"
          description="Suitability score"
          icon={<Ship size={24} />}
        />

        <StatCard
          title="Estimated Savings"
          value="₹40 L"
          change="12.6%"
          description="Potential optimization"
          icon={<DollarSign size={24} />}
        />

      </div>


      {/* Main Content */}

      <div className="dashboard-grid">

        {/* Freight Chart */}

        <div className="panel chart-panel">

          <div className="panel-header">
            <div>
              <h3>Freight Rate Forecast</h3>
              <p>Historical vs predicted freight rates</p>
            </div>

            <select>
              <option>Next 30 Days</option>
              <option>Next 60 Days</option>
              <option>Next 90 Days</option>
            </select>
          </div>

          <div className="chart">

            <div className="chart-line">
              <span>$30</span>
              <span>$25</span>
              <span>$20</span>
              <span>$15</span>
            </div>

            <div className="chart-area">

              <div className="line">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

          </div>

          <div className="chart-labels">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
          </div>

        </div>


        {/* AI Recommendation */}

        <div className="panel recommendation">

          <div className="ai-header">
            <div className="ai-icon">🤖</div>

            <div>
              <h3>AI Recommendation</h3>
              <p>Based on current market data</p>
            </div>
          </div>

          <div className="recommendation-main">

            <span className="recommendation-label">
              RECOMMENDED ACTION
            </span>

            <h2>Charter Vessel Early</h2>

            <p>
              Freight rates are expected to increase by
              approximately 13% over the next 30 days.
            </p>

          </div>

          <div className="recommendation-details">

            <div>
              <span>Vessel</span>
              <strong>50K–55K DWT</strong>
            </div>

            <div>
              <span>Preferred Port</span>
              <strong>Krishnapatnam</strong>
            </div>

            <div>
              <span>Potential Saving</span>
              <strong>₹40 Lakhs</strong>
            </div>

          </div>

          <button className="view-btn">
            View Full Recommendation →
          </button>

        </div>

      </div>


      {/* Bottom Section */}

      <div className="bottom-grid">

        <div className="panel">

          <div className="panel-header">
            <div>
              <h3>Port Performance</h3>
              <p>East Coast of India</p>
            </div>
          </div>

          <div className="port-list">

            <div className="port-row">
              <div>
                <strong>Krishnapatnam</strong>
                <span>Andhra Pradesh</span>
              </div>

              <strong className="score">94%</strong>
            </div>

            <div className="port-row">
              <div>
                <strong>Ennore</strong>
                <span>Tamil Nadu</span>
              </div>

              <strong className="score">87%</strong>
            </div>

            <div className="port-row">
              <div>
                <strong>Visakhapatnam</strong>
                <span>Andhra Pradesh</span>
              </div>

              <strong className="score">81%</strong>
            </div>

          </div>

        </div>


        <div className="panel">

          <div className="panel-header">
            <div>
              <h3>Logistics Status</h3>
              <p>Current operations</p>
            </div>
          </div>

          <div className="status-list">

            <div>
              <span className="green"></span>
              Vessel Availability
              <strong>Good</strong>
            </div>

            <div>
              <span className="yellow"></span>
              Freight Volatility
              <strong>Medium</strong>
            </div>

            <div>
              <span className="green"></span>
              Port Congestion
              <strong>Low</strong>
            </div>

            <div>
              <span className="red"></span>
              Cargo Demand Risk
              <strong>High</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;