import { useState } from "react";
import {
  Package,
  TrendingUp,
  BarChart3,
  Calendar,
  Ship,
  CheckCircle,
} from "lucide-react";

function CargoDemand() {
  const [cargo, setCargo] = useState("Coal");
  const [quantity, setQuantity] = useState("");
  const [forecast, setForecast] = useState(null);

  const calculateDemand = () => {
    if (!quantity) {
      alert("Please enter current cargo quantity.");
      return;
    }

    const current = Number(quantity);

    const forecastData = [
      Math.round(current * 1.08),
      Math.round(current * 1.12),
      Math.round(current * 1.15),
      Math.round(current * 1.19),
      Math.round(current * 1.23),
      Math.round(current * 1.27),
    ];

    setForecast(forecastData);
  };

  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  const maxValue = forecast
    ? Math.max(...forecast)
    : 100;

  return (
    <div className="page-container">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-icon">
          <Package size={25} />
        </div>

        <div>
          <h2>Cargo Demand Forecast</h2>
          <p>
            Predict future bulk cargo requirements using AI analytics
          </p>
        </div>
      </div>


      {/* INPUT PANEL */}
      <div className="panel">

        <div className="panel-header">
          <div>
            <h3>Demand Forecast Parameters</h3>
            <p>
              Enter current cargo demand to generate a forecast
            </p>
          </div>
        </div>


        <div className="form-grid">

          {/* CARGO TYPE */}
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


          {/* CURRENT DEMAND */}
          <div className="form-group">
            <label>Current Demand (Metric Tons)</label>

            <input
              type="number"
              placeholder="Example: 50000"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>


          {/* FORECAST PERIOD */}
          <div className="form-group">
            <label>Forecast Period</label>

            <select>
              <option>Next 6 Months</option>
              <option>Next 12 Months</option>
            </select>
          </div>


          {/* MARKET */}
          <div className="form-group">
            <label>Market Region</label>

            <select>
              <option>East Coast of India</option>
              <option>South India</option>
              <option>India</option>
            </select>
          </div>

        </div>


        <div style={{ padding: "0 24px 24px" }}>
          <button
            className="primary-btn"
            onClick={calculateDemand}
          >
            <TrendingUp size={16} />
            Generate Demand Forecast
          </button>
        </div>

      </div>


      {/* FORECAST RESULT */}
      {forecast && (
        <>
          <div className="result-grid">

            {/* CURRENT DEMAND */}
            <div className="result-card">

              <div className="result-icon blue">
                <Package size={19} />
              </div>

              <span>Current Demand</span>

              <h3>
                {Number(quantity).toLocaleString()} T
              </h3>

              <small>
                Current {cargo} requirement
              </small>

            </div>


            {/* 6 MONTH DEMAND */}
            <div className="result-card">

              <div className="result-icon green">
                <TrendingUp size={19} />
              </div>

              <span>6 Month Demand</span>

              <h3>
                {forecast[5].toLocaleString()} T
              </h3>

              <small className="positive">
                +27% expected growth
              </small>

            </div>


            {/* PEAK DEMAND */}
            <div className="result-card">

              <div className="result-icon orange">
                <BarChart3 size={19} />
              </div>

              <span>Peak Demand</span>

              <h3>
                {Math.max(...forecast).toLocaleString()} T
              </h3>

              <small>
                Expected maximum requirement
              </small>

            </div>


            {/* CONFIDENCE */}
            <div className="result-card">

              <div className="result-icon green">
                <CheckCircle size={19} />
              </div>

              <span>Forecast Confidence</span>

              <h3>91%</h3>

              <small>
                AI model confidence score
              </small>

            </div>

          </div>


          {/* CHART */}
          <div className="panel" style={{ marginTop: "20px" }}>

            <div className="panel-header">

              <div>
                <h3>Projected Cargo Demand</h3>

                <p>
                  {cargo} demand forecast for the next 6 months
                </p>
              </div>

              <BarChart3 size={20} />

            </div>


            <div
              style={{
                padding: "25px",
                height: "300px",
                display: "flex",
                alignItems: "end",
                gap: "18px",
              }}
            >

              {forecast.map((value, index) => {

                const height =
                  (value / maxValue) * 210;

                return (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      height: "240px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "end",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >

                    <strong
                      style={{
                        fontSize: "10px",
                        color: "#526074",
                      }}
                    >
                      {value.toLocaleString()}
                    </strong>

                    <div
                      style={{
                        width: "65%",
                        height: `${height}px`,
                        background: "#1672d3",
                        borderRadius: "6px 6px 0 0",
                        transition: "0.4s",
                      }}
                    ></div>

                    <span
                      style={{
                        fontSize: "10px",
                        color: "#8b95a6",
                      }}
                    >
                      {months[index]}
                    </span>

                  </div>
                );
              })}

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

              <h4>AI Demand Recommendation</h4>

              <p>
                Demand for <strong>{cargo}</strong> is expected to
                increase over the coming months. Consider securing
                vessel capacity and procurement contracts early to
                reduce exposure to future freight rate increases.
              </p>

            </div>

          </div>


          {/* OPERATIONAL INSIGHTS */}
          <div
            className="panel"
            style={{ marginTop: "20px" }}
          >

            <div className="panel-header">

              <div>
                <h3>Operational Insights</h3>
                <p>Recommended planning actions</p>
              </div>

            </div>


            <div className="status-list">

              <div>
                <Calendar size={16} />
                Procurement Planning
                <strong>Start Early</strong>
              </div>

              <div>
                <Ship size={16} />
                Vessel Capacity
                <strong>Reserve</strong>
              </div>

              <div>
                <TrendingUp size={16} />
                Demand Trend
                <strong>Increasing</strong>
              </div>

              <div>
                <CheckCircle size={16} />
                Forecast Status
                <strong>Reliable</strong>
              </div>

            </div>

          </div>

        </>
      )}

    </div>
  );
}

export default CargoDemand;