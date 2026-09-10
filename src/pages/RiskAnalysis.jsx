import { useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  Ship,
  Anchor,
  CloudRain,
  DollarSign,
  Activity,
  CheckCircle,
} from "lucide-react";

function RiskAnalysis() {
  const [cargo, setCargo] = useState("Coal");
  const [quantity, setQuantity] = useState("");
  const [origin, setOrigin] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const analyzeRisk = () => {
    if (!quantity || !origin) {
      alert("Please enter cargo quantity and origin.");
      return;
    }

    setAnalyzed(true);
  };

  return (
    <div className="page-container">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-icon">
          <AlertTriangle size={25} />
        </div>

        <div>
          <h2>Risk Analysis</h2>
          <p>
            Analyze maritime logistics risks before making chartering
            decisions
          </p>
        </div>
      </div>


      {/* INPUT PANEL */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h3>Risk Assessment Parameters</h3>
            <p>
              Enter shipment details to evaluate logistics risks
            </p>
          </div>
        </div>


        <div className="form-grid">

          {/* CARGO */}
          <div className="form-group">
            <label>Cargo Type</label>

            <select
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            >
              <option>Coal</option>
              <option>Iron Ore</option>
              <option>Fertilizer</option>
              <option>Limestone</option>
              <option>Grain</option>
              <option>Cement</option>
            </select>
          </div>


          {/* QUANTITY */}
          <div className="form-group">
            <label>Cargo Quantity (Metric Tons)</label>

            <input
              type="number"
              placeholder="Example: 50000"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>


          {/* ORIGIN */}
          <div className="form-group">
            <label>Origin Country</label>

            <input
              type="text"
              placeholder="Example: Indonesia"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>


          {/* ROUTE */}
          <div className="form-group">
            <label>Destination</label>

            <select>
              <option>East Coast of India</option>
              <option>Krishnapatnam</option>
              <option>Ennore</option>
              <option>Visakhapatnam</option>
              <option>Paradip</option>
            </select>
          </div>

        </div>


        <div style={{ padding: "0 24px 24px" }}>
          <button
            className="primary-btn"
            onClick={analyzeRisk}
          >
            <ShieldCheck size={16} />
            Analyze Risk
          </button>
        </div>

      </div>


      {/* RISK RESULTS */}
      {analyzed && (
        <>

          {/* RISK OVERVIEW */}
          <div className="result-grid">

            {/* OVERALL RISK */}
            <div className="result-card">

              <div className="result-icon orange">
                <AlertTriangle size={19} />
              </div>

              <span>Overall Risk</span>

              <h3>Medium</h3>

              <small>
                Moderate logistics exposure
              </small>

            </div>


            {/* FREIGHT RISK */}
            <div className="result-card">

              <div className="result-icon red">
                <TrendingUp size={19} />
              </div>

              <span>Freight Rate Risk</span>

              <h3>Medium</h3>

              <small>
                Rate volatility detected
              </small>

            </div>


            {/* VESSEL RISK */}
            <div className="result-card">

              <div className="result-icon blue">
                <Ship size={19} />
              </div>

              <span>Vessel Availability</span>

              <h3 className="positive">
                Low Risk
              </h3>

              <small>
                Suitable vessels available
              </small>

            </div>


            {/* PORT RISK */}
            <div className="result-card">

              <div className="result-icon green">
                <Anchor size={19} />
              </div>

              <span>Port Risk</span>

              <h3 className="positive">
                Low
              </h3>

              <small>
                Congestion currently manageable
              </small>

            </div>

          </div>


          {/* RISK FACTORS */}
          <div
            className="panel"
            style={{ marginTop: "20px" }}
          >

            <div className="panel-header">

              <div>
                <h3>Risk Factors</h3>

                <p>
                  Key factors affecting the shipment
                </p>
              </div>

              <Activity size={20} />

            </div>


            <div className="status-list">

              {/* FREIGHT */}
              <div>

                <TrendingUp size={16} />

                <span>
                  Freight Rate Volatility
                </span>

                <strong style={{ color: "#d88a08" }}>
                  Medium
                </strong>

              </div>


              {/* WEATHER */}
              <div>

                <CloudRain size={16} />

                <span>
                  Weather / Seasonal Risk
                </span>

                <strong style={{ color: "#d88a08" }}>
                  Medium
                </strong>

              </div>


              {/* VESSEL */}
              <div>

                <Ship size={16} />

                <span>
                  Vessel Availability
                </span>

                <strong style={{ color: "#16894b" }}>
                  Low
                </strong>

              </div>


              {/* PORT */}
              <div>

                <Anchor size={16} />

                <span>
                  Port Congestion
                </span>

                <strong style={{ color: "#16894b" }}>
                  Low
                </strong>

              </div>


              {/* CURRENCY */}
              <div>

                <DollarSign size={16} />

                <span>
                  Currency Exposure
                </span>

                <strong style={{ color: "#d88a08" }}>
                  Medium
                </strong>

              </div>

            </div>

          </div>


          {/* RISK SCORE */}
          <div
            className="panel"
            style={{ marginTop: "20px" }}
          >

            <div className="panel-header">

              <div>
                <h3>Risk Score</h3>

                <p>
                  AI-generated shipment risk assessment
                </p>
              </div>

              <strong
                style={{
                  fontSize: "22px",
                  color: "#d88a08",
                }}
              >
                58 / 100
              </strong>

            </div>


            <div style={{ padding: "20px" }}>

              <div
                style={{
                  height: "10px",
                  background: "#edf0f5",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >

                <div
                  style={{
                    width: "58%",
                    height: "100%",
                    background: "#f59e0b",
                    borderRadius: "10px",
                  }}
                ></div>

              </div>


              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "8px",
                  fontSize: "10px",
                  color: "#8993a5",
                }}
              >
                <span>Low Risk</span>
                <span>Medium Risk</span>
                <span>High Risk</span>
              </div>

            </div>

          </div>


          {/* AI RECOMMENDATION */}
          <div
            className="forecast-recommendation"
            style={{ marginTop: "20px" }}
          >

            <div className="recommendation-icon">
              🤖
            </div>

            <div>

              <h4>
                AI Risk Mitigation Recommendation
              </h4>

              <p>
                For <strong>{quantity} metric tons</strong> of{" "}
                <strong>{cargo}</strong> imported from{" "}
                <strong>{origin}</strong>, consider early vessel
                chartering to reduce freight-rate exposure. Monitor
                port congestion and seasonal weather conditions
                before finalizing the shipment.
              </p>

            </div>

          </div>


          {/* ACTION PLAN */}
          <div
            className="panel"
            style={{ marginTop: "20px" }}
          >

            <div className="panel-header">

              <div>
                <h3>Risk Mitigation Action Plan</h3>

                <p>
                  Recommended actions for logistics planning
                </p>
              </div>

            </div>


            <div className="status-list">

              <div>
                <CheckCircle size={16} />
                Monitor Freight Rates
                <strong>Recommended</strong>
              </div>

              <div>
                <CheckCircle size={16} />
                Reserve Vessel Capacity
                <strong>Recommended</strong>
              </div>

              <div>
                <CheckCircle size={16} />
                Monitor Port Congestion
                <strong>Required</strong>
              </div>

              <div>
                <CheckCircle size={16} />
                Review Weather Conditions
                <strong>Required</strong>
              </div>

            </div>

          </div>

        </>
      )}

    </div>
  );
}

export default RiskAnalysis;