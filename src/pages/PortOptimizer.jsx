import { useState } from "react";
import {
  Anchor,
  MapPin,
  Ship,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";

function PortOptimizer() {
  const [cargo, setCargo] = useState("Coal");
  const [quantity, setQuantity] = useState("");
  const [origin, setOrigin] = useState("");
  const [result, setResult] = useState(null);

  const ports = [
    {
      name: "Krishnapatnam",
      state: "Andhra Pradesh",
      score: 94,
      distance: "1,280 NM",
      congestion: "Low",
      handling: "₹420 / Ton",
      saving: "₹18 L",
    },
    {
      name: "Ennore",
      state: "Tamil Nadu",
      score: 87,
      distance: "1,350 NM",
      congestion: "Medium",
      handling: "₹450 / Ton",
      saving: "₹14 L",
    },
    {
      name: "Visakhapatnam",
      state: "Andhra Pradesh",
      score: 81,
      distance: "1,420 NM",
      congestion: "Medium",
      handling: "₹470 / Ton",
      saving: "₹11 L",
    },
    {
      name: "Paradip",
      state: "Odisha",
      score: 78,
      distance: "1,510 NM",
      congestion: "High",
      handling: "₹490 / Ton",
      saving: "₹8 L",
    },
  ];

  const optimizePort = () => {
    if (!quantity || !origin) {
      alert("Please enter cargo quantity and origin.");
      return;
    }

    const bestPort = ports[0];

    setResult({
      ...bestPort,
      quantity,
      cargo,
      origin,
    });
  };

  return (
    <div className="page-container">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-icon">
          <Anchor size={25} />
        </div>

        <div>
          <h2>Port Optimizer</h2>
          <p>
            Identify the most efficient East Coast port for your cargo
          </p>
        </div>
      </div>

      {/* INPUT PANEL */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h3>Port Optimization Parameters</h3>
            <p>Enter shipment details to compare suitable ports</p>
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

          {/* REGION */}
          <div className="form-group">
            <label>Destination Region</label>

            <select>
              <option>East Coast of India</option>
              <option>South India</option>
              <option>North East India</option>
            </select>
          </div>

        </div>

        <div style={{ padding: "0 24px 24px" }}>
          <button
            className="primary-btn"
            onClick={optimizePort}
          >
            <Anchor size={16} />
            Optimize Port
          </button>
        </div>

      </div>


      {/* RESULT */}
      {result && (
        <div className="optimizer-results">

          <div className="panel">

            <div className="result-header">
              <div>
                <h3>AI Port Recommendation</h3>
                <p>
                  Best port based on cost, distance and congestion
                </p>
              </div>

              <div className="ai-status">
                <CheckCircle size={13} />
                AI Optimized
              </div>
            </div>


            {/* MAIN RESULT */}
            <div className="vessel-main-card">

              <div className="vessel-main-icon">
                <Anchor size={30} />
              </div>

              <div className="vessel-main-info">
                <h2>{result.name}</h2>

                <p>
                  {result.state} • Recommended destination port
                </p>
              </div>

              <div className="suitability">
                <strong>{result.score}%</strong>
                <span>Suitability Score</span>
              </div>

            </div>


            {/* RESULT CARDS */}
            <div className="result-grid">

              <div className="result-card">
                <div className="result-icon blue">
                  <MapPin size={19} />
                </div>

                <span>Sea Distance</span>
                <h3>{result.distance}</h3>
                <small>Estimated voyage distance</small>
              </div>


              <div className="result-card">
                <div className="result-icon green">
                  <CheckCircle size={19} />
                </div>

                <span>Port Congestion</span>
                <h3>{result.congestion}</h3>
                <small>Current congestion level</small>
              </div>


              <div className="result-card">
                <div className="result-icon orange">
                  <DollarSign size={19} />
                </div>

                <span>Handling Cost</span>
                <h3>{result.handling}</h3>
                <small>Estimated port handling</small>
              </div>


              <div className="result-card">
                <div className="result-icon green">
                  <DollarSign size={19} />
                </div>

                <span>Potential Saving</span>
                <h3 className="positive">
                  {result.saving}
                </h3>
                <small>Estimated logistics saving</small>
              </div>

            </div>


            {/* AI RECOMMENDATION */}
            <div className="forecast-recommendation">

              <div className="recommendation-icon">
                🤖
              </div>

              <div>
                <h4>AI Recommendation</h4>

                <p>
                  For {result.quantity} metric tons of {result.cargo}
                  imported from {result.origin},{" "}
                  <strong>{result.name}</strong> is currently the
                  preferred port based on estimated handling cost,
                  vessel accessibility and congestion.
                </p>
              </div>

            </div>

          </div>

        </div>
      )}


      {/* PORT COMPARISON */}
      <div className="panel" style={{ marginTop: "20px" }}>

        <div className="panel-header">
          <div>
            <h3>East Coast Port Comparison</h3>
            <p>AI-based performance comparison</p>
          </div>
        </div>

        <div className="port-list">

          {ports.map((port, index) => (

            <div className="port-row" key={index}>

              <div>
                <strong>{port.name}</strong>

                <span>
                  {port.state} • {port.distance} •
                  Congestion: {port.congestion}
                </span>
              </div>

              <strong className="score">
                {port.score}%
              </strong>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default PortOptimizer;
