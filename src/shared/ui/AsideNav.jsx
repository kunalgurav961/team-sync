import {
  Bell,
  CheckSquare,
  ChevronDown,
  Grid2X2,
  MessageSquare,
  Moon,
  PanelTop,
  Plus,
  Settings,
  Sun,
  User,
  Users,
} from "lucide-react";
import { useSelector } from "react-redux";
import {
  adminNavigation,
  employeeNavigation,
} from "../../app/constants/navigations";
import NavigationTag from "./NavigationTag";

const AsideNav = () => {
  let { employee } = useSelector((store) => store.auth);

  let navigations =
    employee?.role === "admin" ? adminNavigation : employeeNavigation;
  return (
    <aside className="dashboard-sidebar flex flex-col border-r px-4 py-5 ">
      <div className="mb-8 px-1">
        <h1 className="text-base font-bold tracking-tight">Team-Sync</h1>
        <p className="mt-0.5 text-[9px] text-[var(--color-text-secondary)]">
          Enterprise Workspace
        </p>
      </div>
      <nav className="space-y-1" aria-label="Main navigation">
        {navigations.map((route, index) => {
          return (
            <NavigationTag
              key={index}
              path={route.path}
              title={route.title}
              Icon={route.icon}
            />
          );
        })}
      </nav>
      <button className="mt-auto flex h-8 items-center justify-center gap-2 rounded-md bg-[var(--color-primary)] text-xs font-semibold text-white transition hover:brightness-110">
        <Plus size={15} /> New Task
      </button>
    </aside>
  );
};

export default AsideNav;
