const kpis = [
  { label: "Pending", value: 24 },
  { label: "In progress", value: 12 },
  { label: "Completed", value: 89 },
  { label: "Total tasks", value: 120 },
];

const distribution = [
  { label: "On time", share: 45 },
  { label: "Late", share: 40 },
  { label: "Blocked", share: 20 },
];

const budget = { total: 31000, spent: 60000 };

export function Dashboard() {
  const remaining = budget.total - budget.spent;
  return (
    <main>
      <header>
        <h1>Overview</h1>
        <span className="badge">Real-time</span>
      </header>
      <section className="kpis">
        {kpis.map((k) => (
          <div key={k.label} className="kpi">
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-delta">+12% this week</div>
          </div>
        ))}
      </section>
      <section>
        <h2>Performance</h2>
        {distribution.map((d) => (
          <div key={d.label} className="bar" style={{ width: `${d.share}%` }}>
            {d.label} {d.share}%
          </div>
        ))}
      </section>
      <section>
        <h2>Budget</h2>
        <p>Total ${budget.total.toLocaleString()}</p>
        <p>Spent ${budget.spent.toLocaleString()}</p>
        <p>Remaining ${remaining.toLocaleString()}</p>
      </section>
    </main>
  );
}
