function StatCard({ title, value, change, icon, description }) {
  return (
    <div className="stat-card">

      <div className="stat-top">
        <div className="stat-icon">
          {icon}
        </div>

        <span className="stat-change">
          {change}
        </span>
      </div>

      <h3>{value}</h3>

      <p>{title}</p>

      <small>{description}</small>

    </div>
  );
}

export default StatCard;