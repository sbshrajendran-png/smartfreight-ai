import { useState } from "react";
import {
  Brain,
  Ship,
  Anchor,
  TrendingUp,
  AlertTriangle,
  IndianRupee,
  CheckCircle
} from "lucide-react";

function AIRecommendations() {

  const [form, setForm] = useState({
    cargo: "Coal",
    quantity: 50000,
    origin: "Australia",
    destination: "Krishnapatnam"
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const generateRecommendation = () => {

    const quantity = Number(form.quantity);

    // Freight Forecast Demo
    const currentRate = 25.40;
    const predictedRate = quantity > 70000 ? 30.20 : 28.70;

    // Vessel Recommendation
    let vessel;
    let vesselCapacity;

    if (quantity <= 35000) {
      vessel = "35K DWT";
      vesselCapacity = 35000;
    } else if (quantity <= 50000) {
      vessel = "50K DWT";
      vesselCapacity = 50000;
    } else {
      vessel = "70K DWT";
      vesselCapacity = 70000;
    }

    const utilization =
      ((quantity / vesselCapacity) * 100).toFixed(1);

    // Risk Calculation
    let risk = "Medium";

    if (quantity > 70000) {
      risk = "High";
    } else if (quantity < 30000) {
      risk = "Low";
    }

    // Main AI Decision
    let action;
    let explanation;

    if (predictedRate > currentRate && risk !== "High") {

      action = "Charter Vessel Early";

      explanation =
        "Freight rates are expected to increase. Booking the vessel early can reduce future transportation cost.";

    } else if (risk === "High") {

      action = "Monitor Market & Delay Charter";

      explanation =
        "The current shipment has higher risk due to cargo volume. Monitor freight and vessel availability before chartering.";

    } else {

      action = "Proceed with Charter";

      explanation =
        "Current market conditions are relatively stable. Proceed with the recommended vessel and port.";

    }

    // Estimated Savings
    const estimatedSavings =
      Math.round((predictedRate - currentRate) * quantity * 80);

    setResult({
      action,
      explanation,
      currentRate,
      predictedRate,
      vessel,
      vesselCapacity,
      utilization,
      port: form.destination,
      risk,
      estimatedSavings
    });
  };

  return (
    <div className="recommendation-page">

      {/* Header */}

      <div className="page-header">

        <div>
          <h1>
            <Brain size={30} />
            AI Recommendation Center
          </h1>

          <p>
            Intelligent decision support for vessel chartering and cargo procurement
          </p>
        </div>

      </div>


      {/* AI Banner */}

      <div className="ai-banner">

        <div className="ai-banner-icon">
          <Brain size={35} />
        </div>

        <div>
          <h2>SmartFreight AI Engine</h2>

          <p>
            Analyze freight rates, cargo demand, vessel capacity,
            port performance and operational risk.
          </p>
        </div>

      </div>


      {/* Input Section */}

      <div className="recommendation-card">

        <h2>Shipment Details</h2>

        <div className="form-grid">

          <div className="form-group">

            <label>Cargo Type</label>

            <select
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
            >
              <option>Coal</option>
              <option>Iron Ore</option>
              <option>Cement</option>
              <option>Steel</option>
              <option>Grain</option>
            </select>

          </div>


          <div className="form-group">

            <label>Cargo Quantity (Tonnes)</label>

            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
            />

          </div>


          <div className="form-group">

            <label>Origin Country</label>

            <select
              name="origin"
              value={form.origin}
              onChange={handleChange}
            >
              <option>Australia</option>
              <option>Indonesia</option>
              <option>South Africa</option>
              <option>Brazil</option>
              <option>USA</option>
            </select>

          </div>


          <div className="form-group">

            <label>Destination Port</label>

            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
            >
              <option>Krishnapatnam</option>
              <option>Visakhapatnam</option>
              <option>Paradip</option>
              <option>Kamarajar Port</option>
            </select>

          </div>

        </div>


        <button
          className="generate-btn"
          onClick={generateRecommendation}
        >
          <Brain size={20} />
          Generate AI Recommendation
        </button>

      </div>


      {/* Result */}

      {result && (

        <div className="recommendation-results">

          {/* Main Recommendation */}

          <div className="main-recommendation">

            <div className="success-icon">
              <CheckCircle size={35} />
            </div>

            <div>

              <span>AI RECOMMENDED ACTION</span>

              <h2>{result.action}</h2>

              <p>{result.explanation}</p>

            </div>

          </div>


          {/* Metrics */}

          <div className="recommendation-metrics">


            {/* Freight */}

            <div className="recommendation-metric">

              <div className="metric-icon">
                <TrendingUp size={24} />
              </div>

              <span>Predicted Freight</span>

              <strong>
                ${result.predictedRate}
              </strong>

              <small>
                Current: ${result.currentRate}
              </small>

            </div>


            {/* Vessel */}

            <div className="recommendation-metric">

              <div className="metric-icon">
                <Ship size={24} />
              </div>

              <span>Recommended Vessel</span>

              <strong>
                {result.vessel}
              </strong>

              <small>
                Utilization: {result.utilization}%
              </small>

            </div>


            {/* Port */}

            <div className="recommendation-metric">

              <div className="metric-icon">
                <Anchor size={24} />
              </div>

              <span>Recommended Port</span>

              <strong>
                {result.port}
              </strong>

              <small>
                Optimized route
              </small>

            </div>


            {/* Risk */}

            <div className="recommendation-metric">

              <div className="metric-icon">
                <AlertTriangle size={24} />
              </div>

              <span>Overall Risk</span>

              <strong>
                {result.risk}
              </strong>

              <small>
                Operational assessment
              </small>

            </div>


          </div>


          {/* Savings */}

          <div className="savings-card">

            <div className="savings-icon">
              <IndianRupee size={28} />
            </div>

            <div>

              <span>ESTIMATED COST SAVING</span>

              <h2>
                ₹{result.estimatedSavings.toLocaleString("en-IN")}
              </h2>

              <p>
                Potential saving from optimized charter timing
              </p>

            </div>

          </div>


          {/* AI Explanation */}

          <div className="decision-card">

            <h2>Why AI Recommended This?</h2>

            <div className="decision-list">

              <div>
                <CheckCircle size={18} />
                Freight trend analyzed
              </div>

              <div>
                <CheckCircle size={18} />
                Vessel capacity optimized
              </div>

              <div>
                <CheckCircle size={18} />
                Port selection evaluated
              </div>

              <div>
                <CheckCircle size={18} />
                Operational risk assessed
              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default AIRecommendations;