import { useState } from "react";
import { Package, TrendingUp, AlertTriangle } from "lucide-react";

function CargoDemand() {

  const [formData, setFormData] = useState({
    cargo: "",
    quantity: "",
    period: "30"
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const analyzeDemand = (e) => {
    e.preventDefault();

    if (!formData.cargo || !formData.quantity) {
      alert("Please fill all the fields");
      return;
    }

    const quantity = Number(formData.quantity);

    let demand = "High";
    let expected = quantity * 1.12;
    let growth = 12;
    let risk = "Medium";

    if (quantity < 30000) {
      demand = "Medium";
      expected = quantity * 1.08;
      growth = 8;
      risk = "Low";
    }

    if (quantity > 70000) {
      demand = "Very High";
      expected = quantity * 1.18;
      growth = 18;
      risk = "High";
    }

    setResult({
      demand,
      expected: Math.round(expected),
      growth,
      risk
    });
  };

  return (
    <div className="forecast-page">

      {/* Header */}

      <div className="page-title">

        <div>
          <h2>Cargo Demand Analysis</h2>

          <p>
            Analyze future bulk cargo demand and
            identify demand trends.
          </p>
        </div>

        <div className="forecast-status">
          <span></span>
          AI Demand Engine Active
        </div>

      </div>


      {/* Input Card */}

      <div className="forecast-card">

        <h3>Cargo Information</h3>

        <p className="card-description">
          Enter cargo details to analyze future demand.
        </p>

        <form onSubmit={analyzeDemand}>

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

              <label>Current Cargo Quantity (Tons)</label>

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
            Analyze Demand
          </button>

        </form>

      </div>


      {/* Results */}

      {result && (

        <div className="forecast-results">

          <div className="result-header">

            <div>
              <h3>Cargo Demand Forecast</h3>

              <p>
                {formData.cargo} — Next {formData.period} Days
              </p>
            </div>

            <span className="prediction-badge">
              AI Prediction
            </span>

          </div>


          <div className="result-cards">

            <div className="result-card highlight">

              <div className="result-icon">
                <Package size={21} />
              </div>

              <span>Demand Level</span>

              <h2>{result.demand}</h2>

              <small>Expected market demand</small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                <Package size={21} />
              </div>

              <span>Expected Demand</span>

              <h2>
                {result.expected.toLocaleString()} T
              </h2>

              <small>Forecasted quantity</small>

            </div>


            <div className="result-card">

              <div className="result-icon">
                <TrendingUp size={21} />
              </div>

              <span>Demand Growth</span>

              <h2>+{result.growth}%</h2>

              <small>Expected growth</small>

            </div>


            <div className="result-card">

              <div className="result-icon warning">
                <AlertTriangle size={21} />
              </div>

              <span>Demand Risk</span>

              <h2>{result.risk}</h2>

              <small>Market demand risk</small>

            </div>

          </div>


          {/* AI Recommendation */}

          <div className="forecast-recommendation">

            <div className="recommendation-icon">
              🤖
            </div>

            <div>

              <span>AI DEMAND RECOMMENDATION</span>

              <h3>
                Prepare for {result.demand.toLowerCase()} demand
              </h3>

              <p>
                The system estimates approximately{" "}
                {result.expected.toLocaleString()} tons of{" "}
                {formData.cargo} demand over the next{" "}
                {formData.period} days, with an expected
                growth of {result.growth}%.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default CargoDemand;