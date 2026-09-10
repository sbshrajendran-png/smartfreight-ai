import { useState } from "react";
import { Ship, Calculator, CheckCircle } from "lucide-react";

function VesselOptimizer() {

  const [formData, setFormData] = useState({
    cargo: "",
    quantity: "",
    origin: "",
    destination: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const optimizeVessel = (e) => {
    e.preventDefault();

    if (
      !formData.cargo ||
      !formData.quantity ||
      !formData.origin ||
      !formData.destination
    ) {
      alert("Please fill all the fields");
      return;
    }

    const quantity = Number(formData.quantity);

    let vessel;
    let capacity;
    let score;
    let charterCost;

    if (quantity <= 35000) {
      vessel = "35K DWT";
      capacity = 35000;
      score = 88;
      charterCost = 850000;
    } 
    else if (quantity <= 50000) {
      vessel = "50K DWT";
      capacity = 50000;
      score = 95;
      charterCost = 1100000;
    } 
    else {
      vessel = "70K DWT";
      capacity = 70000;
      score = 91;
      charterCost = 1450000;
    }

    const utilization = ((quantity / capacity) * 100).toFixed(1);

    setResult({
      vessel,
      capacity,
      score,
      charterCost,
      utilization
    });
  };

  return (
    <div className="forecast-page">

      {/* Header */}

      <div className="page-title">

        <div>
          <h2>Vessel Optimizer</h2>

          <p>
            Find the most suitable vessel based on cargo
            requirements and shipment conditions.
          </p>
        </div>

        <div className="forecast-status">
          <span></span>
          AI Optimizer Active
        </div>

      </div>


      {/* Input Card */}

      <div className="forecast-card">

        <h3>Shipment Requirements</h3>

        <p className="card-description">
          Enter cargo and route details to identify the
          optimal vessel.
        </p>

        <form onSubmit={optimizeVessel}>

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


            <div className="form-group">

              <label>Destination Port</label>

              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >

                <option value="">Select port</option>
                <option value="Ennore">Ennore</option>
                <option value="Krishnapatnam">
                  Krishnapatnam
                </option>
                <option value="Visakhapatnam">
                  Visakhapatnam
                </option>
                <option value="Paradip">Paradip</option>

              </select>

            </div>

          </div>


          <button
            type="submit"
            className="generate-btn"
          >
            <Calculator size={18} />
            Optimize Vessel
          </button>

        </form>

      </div>


      {/* Result */}

      {result && (

        <div className="forecast-results">

          <div className="result-header">

            <div>
              <h3>Vessel Optimization Result</h3>

              <p>
                {formData.origin} → {formData.destination}
              </p>
            </div>

            <span className="prediction-badge">
              AI Recommendation
            </span>

          </div>


          <div className="result-cards">

            <div className="result-card highlight">

              <div className="result-icon">
                <Ship size={21} />
              </div>

              <span>Recommended Vessel</span>

              <h2>{result.vessel}</h2>

              <small>
                Capacity: {result.capacity.toLocaleString()} tons
              </small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                <CheckCircle size={21} />
              </div>

              <span>Suitability Score</span>

              <h2>{result.score}%</h2>

              <small>
                Vessel suitability
              </small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                <Ship size={21} />
              </div>

              <span>Cargo Utilization</span>

              <h2>{result.utilization}%</h2>

              <small>
                Vessel capacity utilized
              </small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                💰
              </div>

              <span>Estimated Charter Cost</span>

              <h2>
                ₹{(result.charterCost / 100000).toFixed(1)}L
              </h2>

              <small>
                Demo estimate
              </small>

            </div>

          </div>


          {/* Recommendation */}

          <div className="forecast-recommendation">

            <div className="recommendation-icon">
              🤖
            </div>

            <div>

              <span>AI VESSEL RECOMMENDATION</span>

              <h3>
                Select {result.vessel} vessel
              </h3>

              <p>
                Based on the entered cargo quantity of{" "}
                {Number(formData.quantity).toLocaleString()} tons,
                the {result.vessel} vessel provides an estimated{" "}
                {result.utilization}% capacity utilization with a
                suitability score of {result.score}%.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default VesselOptimizer;