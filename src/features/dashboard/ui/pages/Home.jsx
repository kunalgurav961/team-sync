import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Pencil,
  Rocket,
  Users,
} from "lucide-react";

const stats = [
  {
    label: "Total Tasks",
    value: "128",
    change: "+12%",
    icon: CheckCircle2,
    tone: "violet",
  },
  {
    label: "Completed Tasks",
    value: "94",
    change: "+5%",
    icon: CheckCircle2,
    tone: "gold",
  },
  {
    label: "Active Projects",
    value: "12",
    change: "ACTIVE",
    icon: Rocket,
    tone: "violet",
  },
  {
    label: "Team Members",
    value: "42",
    change: "8 NEW",
    icon: Users,
    tone: "violet",
  },
];
const activity = [
  {
    icon: Pencil,
    title: "Sarah updated Landing Page Redesign",
    time: "2 hours ago",
    tone: "violet",
  },
  {
    icon: CheckCircle2,
    title: "Alex completed API Integration",
    time: "5 hours ago",
    tone: "purple",
  },
  {
    icon: Users,
    title: "New member joined Design Team",
    time: "Yesterday",
    tone: "gold",
  },
  {
    icon: Clock3,
    title: "Server alert: High latency detected",
    time: "Yesterday",
    tone: "red",
  },
];
const bars = [42, 67, 55, 88, 47, 31, 27];

const Home = () => {
  return (
    <div className="dashboard-content px-6 py-5">
      <section className="mb-5">
        <h2 className="text-[22px] font-bold tracking-tight">
          Good morning, Kunal <span aria-hidden="true">👋</span>
        </h2>
        <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
          Here's what's happening in Synthetix AI today.
        </p>
      </section>
      <section className="mb-5 grid grid-cols-2 gap-4 xl:grid-cols-4">
        {stats.map(({ label, value, change, icon: Icon, tone }) => (
          <article className="dashboard-card min-h-[99px] p-4" key={label}>
            <div className="mb-2 flex items-start justify-between">
              <span className={`stat-icon ${tone}`}>
                <Icon size={16} />
              </span>
              <span className="text-[9px] font-semibold tracking-wide text-[var(--color-text-secondary)]">
                {change}
              </span>
            </div>
            <p className="text-[10px] text-[var(--color-text-secondary)]">
              {label}
            </p>
            <strong className="text-[17px] leading-5">{value}</strong>
          </article>
        ))}
      </section>
      <section className="mb-5 grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_208px]">
        <article className="dashboard-card h-[305px] p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold">Task Progress</h3>
            <button className="period-select">
              Last 7 Days <span>⌄</span>
            </button>
          </div>
          <div className="chart-area flex h-[230px] items-end justify-between gap-2 px-1 pb-1">
            {bars.map((height, index) => (
              <div
                className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                key={index}
              >
                <div
                  className={`chart-bar ${index === 3 ? "chart-bar-highlight" : ""}`}
                  style={{ height: `${height}%` }}
                />
                <span className="text-[9px] font-medium text-[var(--color-text-secondary)]">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                </span>
              </div>
            ))}
          </div>
        </article>
        <article className="dashboard-card h-[305px] overflow-hidden p-4">
          <h3 className="mb-4 text-sm font-bold">Activity Timeline</h3>
          <div className="relative space-y-4 before:absolute before:bottom-4 before:left-[10px] before:top-2 before:w-px before:bg-[var(--color-border)]">
            {activity.map(({ icon: Icon, title, time, tone }) => (
              <div className="relative flex gap-3" key={title}>
                <span className={`activity-icon ${tone}`}>
                  <Icon size={12} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[10px] leading-3">{title}</p>
                  <p className="mt-0.5 text-[9px] text-[var(--color-text-secondary)]">
                    {time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_208px]">
        <article className="dashboard-card min-h-[163px] p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold">Active Team Members</h3>
            <button className="text-[10px] text-[var(--color-primary)]">
              View All
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              ["SJ", "Sarah J.", "In Meeting"],
              ["AM", "Alex M.", "Coding"],
              ["ER", "Elena R.", "Design Review"],
              ["ML", "Marcus L.", "Out of Office"],
            ].map(([initials, name, status]) => (
              <div className="member-chip" key={name}>
                <div className="avatar">{initials}</div>
                <div>
                  <p className="text-[10px] font-semibold">{name}</p>
                  <p className="text-[9px] text-[var(--color-text-secondary)]">
                    {status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="suggestion-panel min-h-[163px] p-4">
          <Rocket size={18} className="mb-2 text-white" />
          <h3 className="text-xs font-bold text-white">AI Suggestion</h3>
          <p className="mt-1 text-[10px] leading-3 text-white/70">
            Based on your activity, you should review the "Core API" tasks.
          </p>
          <button className="mt-3 flex items-center gap-1 text-[10px] font-bold text-white">
            Take Action <ArrowUpRight size={12} />
          </button>
        </article>
      </section>
    </div>
  );
};

export default Home;
