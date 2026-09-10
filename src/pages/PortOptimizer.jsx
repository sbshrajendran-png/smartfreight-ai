import { useState } from "react";
import { Anchor, CheckCircle, AlertTriangle } from "lucide-react";

function PortOptimizer() {

  const [formData, setFormData] = useState({
    cargo: "",
    quantity: "",
    origin: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const optimizePort = (e) => {
    e.preventDefault();

    if (!formData.cargo || !formData.quantity || !formData.origin) {
      alert("Please fill all the fields");
      return;
    }

    setResult({
      port: "Krishnapatnam",
      state: "Andhra Pradesh",
      score: 94,
      congestion: "Low",
      handlingCost: "₹18 L",
      turnaround: "2.8 Days"
    });
  };

  return (
    <div className="forecast-page">

      <div className="page-title">

        <div>
          <h2>Port Optimizer</h2>

          <p>
            Compare East Coast ports and identify the
            most suitable destination.
          </p>
        </div>

        <div className="forecast-status">
          <span></span>
          AI Port Optimizer Active
        </div>

      </div>


      {/* Input */}

      <div className="forecast-card">

        <h3>Cargo Requirements</h3>

        <p className="card-description">
          Enter cargo details to find the optimal port.
        </p>

        <form onSubmit={optimizePort}>

          <div className="form-grid">

            <div className="form-group">

              <label>Cargo Type</label>

              <select
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
              >
                <option value="">Select cargo</option>
                <option value="Coal">Coal</option>
                <option value="Iron Ore">Iron Ore</option>
                <option value="Fertilizer">Fertilizer</option>
                <option value="Grain">Grain</option>
              </select>

            </div>


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


            <div className="form-group">

              <label>Origin Country</label>

              <select
                name="origin"
                value={formData.origin}
                onChange={handleChange}
              >
                <option value="">Select origin</option>
                <option value="Australia">Australia</option>
                <option value="Indonesia">Indonesia</option>
                <option value="South Africa">
                  South Africa
                </option>
                <option value="Brazil">Brazil</option>
              </select>

            </div>

          </div>


          <button
            type="submit"
            className="generate-btn"
          >
            <Anchor size={18} />
            Optimize Port
          </button>

        </form>

      </div>


      {/* Result */}

      {result && (

        <div className="forecast-results">

          <div className="result-header">

            <div>
              <h3>Port Optimization Result</h3>

              <p>
                Recommended destination based on
                current requirements
              </p>
            </div>

            <span className="prediction-badge">
              AI Recommendation
            </span>

          </div>


          <div className="result-cards">

            <div className="result-card highlight">

              <div className="result-icon">
                <Anchor size={21} />
              </div>

              <span>Recommended Port</span>

              <h2>{result.port}</h2>

              <small>{result.state}</small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                <CheckCircle size={21} />
              </div>

              <span>Port Suitability</span>

              <h2>{result.score}%</h2>

              <small>Overall score</small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                <AlertTriangle size={21} />
              </div>

              <span>Port Congestion</span>

              <h2>{result.congestion}</h2>

              <small>Current status</small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                ₹
              </div>

              <span>Estimated Handling Cost</span>

              <h2>{result.handlingCost}</h2>

              <small>Demo estimate</small>

            </div>

          </div>


          {/* Recommendation */}

          <div className="forecast-recommendation">

            <div className="recommendation-icon">
              🤖
            </div>

            <div>

              <span>AI PORT RECOMMENDATION</span>

              <h3>
                Choose {result.port}
              </h3>

              <p>
                {result.port} currently provides the best
                combination of port suitability, low
                congestion and estimated handling cost.
                Estimated turnaround time is{" "}
                {result.turnaround}.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default PortOptimizer;