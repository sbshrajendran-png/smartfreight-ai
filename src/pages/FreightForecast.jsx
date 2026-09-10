import { useState } from "react";
import {
  TrendingUp,
  Ship,
  AlertTriangle,
  Brain
} from "lucide-react";

function FreightForecast() {

  const [form, setForm] = useState({
    origin: "Australia",
    port: "Krishnapatnam",
    cargo: "Coal",
    quantity: "50000",
    period: "30 Days"
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const generateForecast = () => {

    const quantity = Number(form.quantity);

    const currentRate = 25.40;

    const predictedRate =
      quantity > 70000 ? 30.20 :
      quantity > 50000 ? 29.40 :
      28.70;

    const increase =
      ((predictedRate - currentRate) / currentRate * 100).toFixed(1);

    const risk =
      quantity > 70000 ? "High" :
      quantity < 30000 ? "Low" :
      "Medium";

    setResult({
      currentRate,
      predictedRate,
      increase,
      risk
    });
  };

  return (
    <div className="page-container">

      {/* PAGE HEADER */}

      <div className="page-header">

        <div>
          <h2>Freight Rate Forecast</h2>

          <p>
            Predict future freight rates using historical
            market and shipping data.
          </p>
        </div>

        <div className="page-header-icon">
          <TrendingUp size={28} />
        </div>

      </div>


      {/* FORECAST FORM */}

      <div className="panel">

        <div className="panel-header">

          <div>
            <h3>Forecast Parameters</h3>

            <p>
              Enter shipment details to generate a freight forecast.
            </p>
          </div>

        </div>


        <div className="form-grid">

          {/* Origin */}

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


          {/* Destination */}

          <div className="form-group">

            <label>Destination Port</label>

            <select
              name="port"
              value={form.port}
              onChange={handleChange}
            >
              <option>Krishnapatnam</option>
              <option>Ennore</option>
              <option>Visakhapatnam</option>
              <option>Paradip</option>
            </select>

          </div>


          {/* Cargo */}

          <div className="form-group">

            <label>Cargo Type</label>

            <select
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
            >
              <option>Coal</option>
              <option>Iron Ore</option>
              <option>Limestone</option>
              <option>Grain</option>
              <option>Fertilizer</option>
            </select>

          </div>


          {/* Quantity */}

          <div className="form-group">

            <label>Cargo Quantity (Tons)</label>

            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
            />

          </div>


          {/* Forecast Period */}

          <div className="form-group">

            <label>Forecast Period</label>

            <select
              name="period"
              value={form.period}
              onChange={handleChange}
            >
              <option>30 Days</option>
              <option>60 Days</option>
              <option>90 Days</option>
            </select>

          </div>

        </div>


        <button
          className="primary-btn"
          onClick={generateForecast}
        >
          <TrendingUp size={18} />
          Generate Forecast
        </button>

      </div>


      {/* RESULT */}

      {result && (

        <div className="forecast-results">

          <div className="result-header">

            <div>
              <h3>Forecast Result</h3>

              <p>
                AI-generated freight rate prediction
              </p>
            </div>

            <div className="ai-status">
              <Brain size={18} />
              AI Analysis Complete
            </div>

          </div>


          <div className="result-grid">

            {/* Current Rate */}

            <div className="result-card">

              <div className="result-icon blue">
                <TrendingUp size={22} />
              </div>

              <span>Current Freight Rate</span>

              <h2>
                ${result.currentRate.toFixed(2)}
              </h2>

              <small>per metric ton</small>

            </div>


            {/* Predicted Rate */}

            <div className="result-card">

              <div className="result-icon green">
                <TrendingUp size={22} />
              </div>

              <span>Predicted Freight Rate</span>

              <h2>
                ${result.predictedRate.toFixed(2)}
              </h2>

              <small>
                Next {form.period}
              </small>

            </div>


            {/* Increase */}

            <div className="result-card">

              <div className="result-icon orange">
                <TrendingUp size={22} />
              </div>

              <span>Expected Change</span>

              <h2 className="positive">
                +{result.increase}%
              </h2>

              <small>
                Freight rate movement
              </small>

            </div>


            {/* Risk */}

            <div className="result-card">

              <div className="result-icon red">
                <AlertTriangle size={22} />
              </div>

              <span>Forecast Risk</span>

              <h2>
                {result.risk}
              </h2>

              <small>
                Market volatility
              </small>

            </div>

          </div>


          {/* AI RECOMMENDATION */}

          <div className="forecast-recommendation">

            <div className="recommendation-icon">
              <Brain size={24} />
            </div>

            <div>

              <span>AI RECOMMENDATION</span>

              <h3>
                Charter Vessel Early
              </h3>

              <p>
                Freight rates are expected to increase by
                approximately {result.increase}% during the
                selected forecast period. Early vessel
                chartering can help reduce potential
                transportation costs.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default FreightForecast;