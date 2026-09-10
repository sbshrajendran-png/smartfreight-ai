import { useState } from "react";
import {
  AlertTriangle,
  TrendingUp,
  Ship,
  Anchor,
  Package,
  ShieldCheck
} from "lucide-react";

function RiskAnalysis() {

  const [formData, setFormData] = useState({
    cargo: "",
    quantity: "",
    port: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const analyzeRisk = (e) => {
    e.preventDefault();

    if (!formData.cargo || !formData.quantity || !formData.port) {
      alert("Please fill all the fields");
      return;
    }

    const quantity = Number(formData.quantity);

    let overallRisk = "Medium";
    let freightRisk = "Medium";
    let congestion = "Low";
    let vesselRisk = "Low";
    let demandRisk = "Medium";

    if (quantity > 70000) {
      overallRisk = "High";
      freightRisk = "High";
      demandRisk = "High";
      vesselRisk = "Medium";
    } else if (quantity < 30000) {
      overallRisk = "Low";
      freightRisk = "Low";
      demandRisk = "Low";
    }

    setResult({
      overallRisk,
      freightRisk,
      congestion,
      vesselRisk,
      demandRisk
    });
  };

  return (
    <div className="forecast-page">

      {/* Header */}

      <div className="page-title">

        <div>
          <h2>Risk Analysis</h2>

          <p>
            Analyze logistics risks before making
            chartering and cargo procurement decisions.
          </p>
        </div>

        <div className="forecast-status">
          <span></span>
          AI Risk Engine Active
        </div>

      </div>


      {/* Input */}

      <div className="forecast-card">

        <h3>Shipment Risk Assessment</h3>

        <p className="card-description">
          Enter shipment details to evaluate potential
          logistics risks.
        </p>

        <form onSubmit={analyzeRisk}>

          <div className="form-grid">

            {/* Cargo */}

            <div className="form-group">

              <label>Cargo Type</label>

              <select
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
              >

                <option value="">
                  Select cargo
                </option>

                <option value="Coal">
                  Coal
                </option>

                <option value="Iron Ore">
                  Iron Ore
                </option>

                <option value="Fertilizer">
                  Fertilizer
                </option>

                <option value="Grain">
                  Grain
                </option>

              </select>

            </div>


            {/* Quantity */}

            <div className="form-group">

              <label>Cargo Quantity (Tons)</label>

              <input
                type="number"
                name="quantity"
                placeholder="Example: 50000"
                value={formData.quantity}
                onChange={handleChange}
              />

            </div>


            {/* Port */}

            <div className="form-group">

              <label>Destination Port</label>

              <select
                name="port"
                value={formData.port}
                onChange={handleChange}
              >

                <option value="">
                  Select port
                </option>

                <option value="Ennore">
                  Ennore
                </option>

                <option value="Krishnapatnam">
                  Krishnapatnam
                </option>

                <option value="Visakhapatnam">
                  Visakhapatnam
                </option>

                <option value="Paradip">
                  Paradip
                </option>

              </select>

            </div>

          </div>


          <button
            type="submit"
            className="generate-btn"
          >

            <ShieldCheck size={18} />

            Analyze Risk

          </button>

        </form>

      </div>


      {/* Results */}

      {result && (

        <div className="forecast-results">

          <div className="result-header">

            <div>

              <h3>Risk Assessment Result</h3>

              <p>
                {formData.cargo} → {formData.port}
              </p>

            </div>

            <span className="prediction-badge">
              AI Risk Assessment
            </span>

          </div>


          {/* Risk Cards */}

          <div className="result-cards">

            {/* Overall */}

            <div className="result-card highlight">

              <div className="result-icon warning">
                <AlertTriangle size={21} />
              </div>

              <span>Overall Risk</span>

              <h2>
                {result.overallRisk}
              </h2>

              <small>
                Shipment risk level
              </small>

            </div>


            {/* Freight */}

            <div className="result-card">

              <div className="result-icon">

                <TrendingUp size={21} />

              </div>

              <span>Freight Volatility</span>

              <h2>
                {result.freightRisk}
              </h2>

              <small>
                Freight rate risk
              </small>

            </div>


            {/* Port */}

            <div className="result-card">

              <div className="result-icon">

                <Anchor size={21} />

              </div>

              <span>Port Congestion</span>

              <h2>
                {result.congestion}
              </h2>

              <small>
                Port operational risk
              </small>

            </div>


            {/* Vessel */}

            <div className="result-card">

              <div className="result-icon">

                <Ship size={21} />

              </div>

              <span>Vessel Availability</span>

              <h2>
                {result.vesselRisk}
              </h2>

              <small>
                Vessel availability risk
              </small>

            </div>

          </div>


          {/* Additional Risk */}

          <div className="panel" style={{ marginTop: "20px" }}>

            <div className="panel-header">

              <div>

                <h3>Risk Indicators</h3>

                <p>
                  Current shipment risk factors
                </p>

              </div>

            </div>


            <div className="status-list">

              <div>

                <span className="yellow"></span>

                Freight Rate Risk

                <strong>
                  {result.freightRisk}
                </strong>

              </div>


              <div>

                <span className="green"></span>

                Port Congestion

                <strong>
                  {result.congestion}
                </strong>

              </div>


              <div>

                <span className="green"></span>

                Vessel Availability

                <strong>
                  {result.vesselRisk}
                </strong>

              </div>


              <div>

                <span className="yellow"></span>

                Cargo Demand Risk

                <strong>
                  {result.demandRisk}
                </strong>

              </div>

            </div>

          </div>


          {/* AI Recommendation */}

          <div className="forecast-recommendation">

            <div className="recommendation-icon">
              🤖
            </div>

            <div>

              <span>
                AI RISK RECOMMENDATION
              </span>

              <h3>
                {result.overallRisk === "High"
                  ? "Take additional risk precautions"
                  : result.overallRisk === "Medium"
                  ? "Monitor market conditions"
                  : "Shipment risk is currently manageable"}
              </h3>

              <p>

                The system has evaluated freight volatility,
                port congestion, vessel availability and cargo
                demand to estimate the overall shipment risk.

              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default RiskAnalysis;