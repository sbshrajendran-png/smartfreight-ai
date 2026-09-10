import { useState } from "react";
import {
  Brain,
  Ship,
  Anchor,
  TrendingUp,
  Package,
  DollarSign,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

function AIRecommendations() {
  const [cargo, setCargo] = useState("Coal");
  const [quantity, setQuantity] = useState("");
  const [origin, setOrigin] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const generateRecommendation = () => {
    if (!quantity || !origin) {
      alert("Please enter cargo quantity and origin.");
      return;
    }

    const qty = Number(quantity);

    let vessel = "50K DWT";
    let port = "Krishnapatnam";
    let freight = "$28.70";
    let saving = "₹40 Lakhs";
    let confidence = "94%";

    if (qty > 70000) {
      vessel = "70K DWT";
      port = "Visakhapatnam";
      freight = "$30.20";
      saving = "₹52 Lakhs";
      confidence = "91%";
    } else if (qty <= 35000) {
      vessel = "35K DWT";
      port = "Ennore";
      freight = "$27.90";
      saving = "₹25 Lakhs";
      confidence = "93%";
    }

    setRecommendation({
      vessel,
      port,
      freight,
      saving,
      confidence,
      quantity: qty,
    });
  };

  return (
    <div className="page-container">

      {/* PAGE HEADER */}
      <div className="page-header">

        <div className="page-header-icon">
          <Brain size={25} />
        </div>

        <div>
          <h2>AI Recommendations</h2>

          <p>
            Intelligent recommendations for freight, vessel and
            port optimization
          </p>
        </div>

      </div>


      {/* INPUT PANEL */}
      <div className="panel">

        <div className="panel-header">

          <div>
            <h3>AI Decision Parameters</h3>

            <p>
              Enter shipment information to generate an optimized
              logistics recommendation
            </p>
          </div>

          <Brain size={21} />

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


          {/* DESTINATION */}
          <div className="form-group">

            <label>Destination Region</label>

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
            onClick={generateRecommendation}
          >
            <Brain size={16} />
            Generate AI Recommendation
          </button>

        </div>

      </div>


      {/* AI RESULT */}
      {recommendation && (
        <>

          {/* AI STATUS */}
          <div
            className="panel"
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "#f5faff",
            }}
          >

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >

              <div
                className="ai-icon"
                style={{
                  width: "45px",
                  height: "45px",
                }}
              >
                🤖
              </div>

              <div>

                <h3 style={{ fontSize: "15px" }}>
                  AI Analysis Completed
                </h3>

                <p
                  style={{
                    marginTop: "4px",
                    fontSize: "11px",
                    color: "#7b8799",
                  }}
                >
                  Recommendation generated using shipment,
                  freight and logistics parameters.
                </p>

              </div>

              <div
                style={{
                  marginLeft: "auto",
                  color: "#16894b",
                  fontWeight: "700",
                  fontSize: "12px",
                }}
              >
                <CheckCircle size={16} />
                {recommendation.confidence}
              </div>

            </div>

          </div>


          {/* RECOMMENDATION CARDS */}
          <div className="result-grid">

            {/* VESSEL */}
            <div className="result-card">

              <div className="result-icon blue">
                <Ship size={19} />
              </div>

              <span>Recommended Vessel</span>

              <h3>
                {recommendation.vessel}
              </h3>

              <small>
                Based on cargo quantity
              </small>

            </div>


            {/* PORT */}
            <div className="result-card">

              <div className="result-icon green">
                <Anchor size={19} />
              </div>

              <span>Preferred Port</span>

              <h3>
                {recommendation.port}
              </h3>

              <small>
                East Coast optimization
              </small>

            </div>


            {/* FREIGHT */}
            <div className="result-card">

              <div className="result-icon orange">
                <TrendingUp size={19} />
              </div>

              <span>Expected Freight</span>

              <h3>
                {recommendation.freight}
              </h3>

              <small>
                Estimated rate per metric ton
              </small>

            </div>


            {/* SAVING */}
            <div className="result-card">

              <div className="result-icon green">
                <DollarSign size={19} />
              </div>

              <span>Potential Saving</span>

              <h3 className="positive">
                {recommendation.saving}
              </h3>

              <small>
                Estimated logistics optimization
              </small>

            </div>

          </div>


          {/* MAIN RECOMMENDATION */}
          <div
            className="panel"
            style={{ marginTop: "20px" }}
          >

            <div className="panel-header">

              <div>
                <h3>Recommended Logistics Strategy</h3>

                <p>
                  AI-generated decision summary
                </p>
              </div>

              <ShieldCheck size={20} />

            </div>


            <div
              style={{
                padding: "22px",
              }}
            >

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(3, 1fr)",
                  gap: "15px",
                }}
              >

                <div
                  style={{
                    padding: "16px",
                    background: "#f8fafc",
                    borderRadius: "8px",
                  }}
                >

                  <Ship size={20} />

                  <h4
                    style={{
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    Charter Strategy
                  </h4>

                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "10px",
                      color: "#7c8799",
                      lineHeight: "1.5",
                    }}
                  >
                    Secure the recommended vessel early
                    to reduce exposure to freight-rate
                    increases.
                  </p>

                </div>


                <div
                  style={{
                    padding: "16px",
                    background: "#f8fafc",
                    borderRadius: "8px",
                  }}
                >

                  <Anchor size={20} />

                  <h4
                    style={{
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    Port Strategy
                  </h4>

                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "10px",
                      color: "#7c8799",
                      lineHeight: "1.5",
                    }}
                  >
                    Prioritize {recommendation.port}
                    for better operational efficiency
                    and estimated cost savings.
                  </p>

                </div>


                <div
                  style={{
                    padding: "16px",
                    background: "#f8fafc",
                    borderRadius: "8px",
                  }}
                >

                  <Package size={20} />

                  <h4
                    style={{
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    Cargo Strategy
                  </h4>

                  <p
                    style={{
                      marginTop: "5px",
                      fontSize: "10px",
                      color: "#7c8799",
                      lineHeight: "1.5",
                    }}
                  >
                    Plan procurement according to the
                    forecasted cargo demand.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* FINAL AI RECOMMENDATION */}
          <div
            className="forecast-recommendation"
            style={{ marginTop: "20px" }}
          >

            <div className="recommendation-icon">
              🤖
            </div>

            <div>

              <h4>
                Final AI Recommendation
              </h4>

              <p>

                For <strong>{recommendation.quantity.toLocaleString()}
                metric tons</strong> of{" "}
                <strong>{cargo}</strong> imported from{" "}
                <strong>{origin}</strong>, AI recommends a{" "}
                <strong>{recommendation.vessel}</strong> vessel
                with <strong>{recommendation.port}</strong> as the
                preferred port. Early chartering can help reduce
                freight-rate exposure and achieve an estimated
                saving of <strong>{recommendation.saving}</strong>.

              </p>

            </div>

          </div>

        </>
      )}

    </div>
  );
}

export default AIRecommendations;