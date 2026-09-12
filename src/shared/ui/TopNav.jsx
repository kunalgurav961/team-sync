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
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../shared/state/themeSlice";
import { useEffect } from "react";

const TopNav = () => {
    const { mode } = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    useEffect(() => {
      if (mode === "light") {
        document.body.classList.add("light");
      } else {
        document.body.classList.remove("light");
      }
    }, [mode]);
  return (
    <header className="dashboard-header flex h-12 items-center justify-between border-b px-6">
      <label className="dashboard-search flex h-7 w-72 items-center gap-2 rounded-md px-2.5 text-[10px] text-[var(--color-text-secondary)]">
        <PanelTop size={13} />
        <input
          aria-label="Search workspace"
          className="w-full bg-transparent outline-none placeholder:text-[var(--color-text-secondary)]"
          placeholder="Search workspace..."
        />
      </label>
      <div className="flex items-center gap-4 text-[var(--color-text-secondary)]">
        <button className="icon-button" aria-label="Notifications">
          <Bell size={16} />
        </button>
        <button
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={() => dispatch(toggleTheme())}
        >
          {mode === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          <span>{mode === "dark" ? "Light" : "Dark"}</span>
        </button>
        <div className="hidden items-center gap-2 border-l border-[var(--color-border)] pl-4 sm:flex">
          <div className="avatar avatar-small">DK</div>
          <ChevronDown size={13} />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
