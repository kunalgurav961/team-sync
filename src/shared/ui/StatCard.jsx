// components/common/StatCard.jsx

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="employee-stat-card">
      <div className="employee-stat-content">
        <div>
          <p className="employee-stat-label">{title}</p>

          <h2 className="employee-stat-value">{value}</h2>
        </div>

        <div className="employee-stat-icon">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
