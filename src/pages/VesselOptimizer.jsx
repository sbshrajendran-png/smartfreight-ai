import { useState } from "react";
import {
  Ship,
  Package,
  MapPin,
  Anchor,
  Brain,
  CheckCircle
} from "lucide-react";

function VesselOptimizer() {

  const [form, setForm] = useState({
    cargo: "Coal",
    quantity: "50000",
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

  const optimizeVessel = () => {

    const quantity = Number(form.quantity);

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

    const utilization = Math.min(
      ((quantity / capacity) * 100),
      100
    ).toFixed(1);

    setResult({
      vessel,
      capacity,
      score,
      charterCost,
      utilization
    });
  };

  return (
    <div className="page-container">

      {/* PAGE HEADER */}

      <div className="page-header">

        <div>
          <h2>Vessel Optimizer</h2>

          <p>
            Find the most suitable vessel size for your
            bulk cargo shipment.
          </p>
        </div>

        <div className="page-header-icon">
          <Ship size={28} />
        </div>

      </div>


      {/* INPUT PANEL */}

      <div className="panel">

        <div className="panel-header">

          <div>
            <h3>Shipment Details</h3>

            <p>
              Enter cargo and route information to optimize
              vessel selection.
            </p>
          </div>

        </div>


        <div className="form-grid">

          {/* Cargo */}

          <div className="form-group">

            <label>
              <Package size={14} />
              Cargo Type
            </label>

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

            <label>
              <Package size={14} />
              Cargo Quantity (Tons)
            </label>

            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
            />

          </div>


          {/* Origin */}

          <div className="form-group">

            <label>
              <MapPin size={14} />
              Origin Country
            </label>

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

            <label>
              <Anchor size={14} />
              Destination Port
            </label>

            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
            >
              <option>Krishnapatnam</option>
              <option>Ennore</option>
              <option>Visakhapatnam</option>
              <option>Paradip</option>
            </select>

          </div>

        </div>


        <button
          className="primary-btn"
          onClick={optimizeVessel}
        >
          <Ship size={18} />
          Optimize Vessel
        </button>

      </div>


      {/* RESULT */}

      {result && (

        <div className="optimizer-results">

          <div className="result-header">

            <div>
              <h3>Vessel Recommendation</h3>

              <p>
                AI-based vessel suitability analysis
              </p>
            </div>

            <div className="ai-status">
              <Brain size={18} />
              AI Analysis Complete
            </div>

          </div>


          {/* MAIN RECOMMENDATION */}

          <div className="vessel-main-card">

            <div className="vessel-main-icon">
              <Ship size={35} />
            </div>

            <div className="vessel-main-info">

              <span>RECOMMENDED VESSEL</span>

              <h2>{result.vessel}</h2>

              <p>
                Best suited for {form.quantity} tons of{" "}
                {form.cargo} from {form.origin} to{" "}
                {form.destination}.
              </p>

            </div>

            <div className="suitability">

              <strong>{result.score}%</strong>

              <span>Suitability</span>

            </div>

          </div>


          {/* RESULT CARDS */}

          <div className="result-grid">

            <div className="result-card">

              <div className="result-icon blue">
                <Ship size={22} />
              </div>

              <span>Vessel Capacity</span>

              <h2>
                {(result.capacity / 1000).toFixed(0)}K
              </h2>

              <small>DWT</small>

            </div>


            <div className="result-card">

              <div className="result-icon green">
                <CheckCircle size={22} />
              </div>

              <span>Cargo Utilization</span>

              <h2>
                {result.utilization}%
              </h2>

              <small>Capacity utilization</small>

            </div>


            <div className="result-card">

              <div className="result-icon orange">
                <Package size={22} />
              </div>

              <span>Cargo Quantity</span>

              <h2>
                {(Number(form.quantity) / 1000).toFixed(0)}K
              </h2>

              <small>Metric tons</small>

            </div>


            <div className="result-card">

              <div className="result-icon red">
                <Anchor size={22} />
              </div>

              <span>Estimated Charter Cost</span>

              <h2>
                ₹{(result.charterCost / 100000).toFixed(1)}L
              </h2>

              <small>Estimated cost</small>

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
                Charter {result.vessel} Vessel
              </h3>

              <p>
                The {result.vessel} vessel provides an
                estimated {result.utilization}% cargo
                utilization with a suitability score of{" "}
                {result.score}%. This option offers a
                balanced combination of capacity and
                estimated charter cost.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default VesselOptimizer;