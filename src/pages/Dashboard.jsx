import {
  TrendingUp,
  Package,
  Ship,
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


          {/* Chart */}
          <div className="forecast-chart">

            {/* Y Axis */}
            <div className="y-axis">
              <span>$30</span>
              <span>$25</span>
              <span>$20</span>
              <span>$15</span>
            </div>


            {/* Chart Area */}
            <div className="chart-content">

              {/* Grid Lines */}
              <div className="grid-line line-30"></div>
              <div className="grid-line line-25"></div>
              <div className="grid-line line-20"></div>
              <div className="grid-line line-15"></div>


              {/* SVG Chart */}
              <svg
                className="forecast-svg"
                viewBox="0 0 600 220"
                preserveAspectRatio="none"
              >

                {/* Historical Line */}
                <polyline
                  points="0,155 100,140 200,150 300,125 400,115"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />


                {/* Predicted Line */}
                <polyline
                  points="400,115 500,90 600,55"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="4"
                  strokeDasharray="8 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />


                {/* Historical Points */}
                <circle cx="0" cy="155" r="5" fill="#2563eb" />
                <circle cx="100" cy="140" r="5" fill="#2563eb" />
                <circle cx="200" cy="150" r="5" fill="#2563eb" />
                <circle cx="300" cy="125" r="5" fill="#2563eb" />
                <circle cx="400" cy="115" r="5" fill="#2563eb" />


                {/* Predicted Points */}
                <circle cx="500" cy="90" r="5" fill="#16a34a" />
                <circle cx="600" cy="55" r="5" fill="#16a34a" />

              </svg>


              {/* Legend */}
              <div className="chart-legend">

                <span>
                  <i className="legend-blue"></i>
                  Historical
                </span>

                <span>
                  <i className="legend-green"></i>
                  Predicted
                </span>

              </div>

            </div>

          </div>


          {/* X Axis */}
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

            <div className="ai-icon">
              🤖
            </div>

            <div>
              <h3>AI Recommendation</h3>
              <p>Based on current market data</p>
            </div>

          </div>


          <div className="recommendation-main">

            <span className="recommendation-label">
              RECOMMENDED ACTION
            </span>

            <h2>
              Charter Vessel Early
            </h2>

            <p>
              Freight rates are expected to increase by
              approximately 13% over the next 30 days.
            </p>

          </div>


          {/* Recommendation Details */}
          <div className="recommendation-details">

            <div className="recommendation-detail">

              <span>Vessel</span>

              <strong>
                50K–55K DWT
              </strong>

            </div>


            <div className="recommendation-detail">

              <span>Preferred Port</span>

              <strong>
                Krishnapatnam
              </strong>

            </div>


            <div className="recommendation-detail">

              <span>Potential Saving</span>

              <strong>
                ₹40 Lakhs
              </strong>

            </div>

          </div>


          <button className="view-btn">
            View Full Recommendation →
          </button>

        </div>

      </div>


      {/* Bottom Section */}
      <div className="bottom-grid">


        {/* Port Performance */}
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

              <strong className="score">
                94%
              </strong>

            </div>


            <div className="port-row">

              <div>
                <strong>Ennore</strong>
                <span>Tamil Nadu</span>
              </div>

              <strong className="score">
                87%
              </strong>

            </div>


            <div className="port-row">

              <div>
                <strong>Visakhapatnam</strong>
                <span>Andhra Pradesh</span>
              </div>

              <strong className="score">
                81%
              </strong>

            </div>

          </div>

        </div>


        {/* Logistics Status */}
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