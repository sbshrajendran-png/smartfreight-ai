import { useState } from "react";
import { TrendingUp, Ship, AlertTriangle } from "lucide-react";

function FreightForecast() {

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    cargo: "",
    quantity: "",
    period: "30"
  });

  const [forecast, setForecast] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateForecast = (e) => {
    e.preventDefault();

    if (
      !formData.origin ||
      !formData.destination ||
      !formData.cargo ||
      !formData.quantity
    ) {
      alert("Please fill all the fields");
      return;
    }

    const currentRate = 25.40;
    const predictedRate = 28.70;
    const increase = 13;

    setForecast({
      currentRate,
      predictedRate,
      increase,
      risk: "Medium"
    });
  };

  return (
    <div className="forecast-page">

      {/* Page Header */}

      <div className="page-title">
        <div>
          <h2>Freight Rate Forecast</h2>

          <p>
            Predict future freight rates using intelligent
            market analysis.
          </p>
        </div>

        <div className="forecast-status">
          <span></span>
          AI Forecast Engine Active
        </div>
      </div>


      {/* Input Form */}

      <div className="forecast-card">

        <h3>Shipment Details</h3>

        <p className="card-description">
          Enter your shipment information to generate a
          freight forecast.
        </p>

        <form onSubmit={generateForecast}>

          <div className="form-grid">

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
                <option value="South Africa">South Africa</option>
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
              <label>Forecast Period</label>

              <select
                name="period"
                value={formData.period}
                onChange={handleChange}
              >
                <option value="30">Next 30 Days</option>
                <option value="60">Next 60 Days</option>
                <option value="90">Next 90 Days</option>
              </select>
            </div>

          </div>


          <button
            type="submit"
            className="generate-btn"
          >
            <TrendingUp size={18} />
            Generate Forecast
          </button>

        </form>

      </div>


      {/* Forecast Result */}

      {forecast && (

        <div className="forecast-results">

          <div className="result-header">
            <div>
              <h3>Forecast Results</h3>

              <p>
                {formData.origin} → {formData.destination}
              </p>
            </div>

            <span className="prediction-badge">
              AI Prediction
            </span>
          </div>


          <div className="result-cards">

            <div className="result-card">

              <div className="result-icon">
                <TrendingUp size={21} />
              </div>

              <span>Current Freight Rate</span>

              <h2>
                ${forecast.currentRate}
              </h2>

              <small>per metric ton</small>

            </div>


            <div className="result-card highlight">

              <div className="result-icon">
                <TrendingUp size={21} />
              </div>

              <span>Predicted Freight Rate</span>

              <h2>
                ${forecast.predictedRate}
              </h2>

              <small>
                Next {formData.period} days
              </small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                <Ship size={21} />
              </div>

              <span>Expected Change</span>

              <h2>
                +{forecast.increase}%
              </h2>

              <small>Rate increase expected</small>

            </div>


            <div className="result-card">

              <div className="result-icon warning">
                <AlertTriangle size={21} />
              </div>

              <span>Risk Level</span>

              <h2>
                {forecast.risk}
              </h2>

              <small>Market volatility</small>

            </div>

          </div>


          {/* Recommendation */}

          <div className="forecast-recommendation">

            <div className="recommendation-icon">
              🤖
            </div>

            <div>

              <span>AI RECOMMENDATION</span>

              <h3>
                Consider chartering your vessel early
              </h3>

              <p>
                Our model predicts a {forecast.increase}%
                increase in freight rates over the selected
                forecast period. Early chartering may help
                reduce transportation costs.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default FreightForecast;