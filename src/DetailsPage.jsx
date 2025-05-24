import { useLocation } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = () => {
  const { state } = useLocation();
  if (!state) return <div className="details-container">No data available.</div>;

  return (
    <div className="details-container">
      <h2>Submitted Details</h2>
      <div className="details-list">
        {Object.entries(state).map(([key, value]) => (
          <div key={key} className="detail-item">
            <span className="detail-key">{key}:</span> <span className="detail-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
