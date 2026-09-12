import {
  Building2,
  ChartArea,
  File,
  LayoutDashboard,
  List,
  MessageCircle,
  Presentation,
  Settings,
  User,
  User2,
  User2Icon,
  Users,
} from "lucide-react";

export const employeeNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/home/myTask",
    title: "My-Task",
    icon: List,
  },
  {
    path: "/home/attendance",
    title: "Attendance",
    icon: Presentation,
  },
  {
    path: "/home/chat",
    title: "Chats",
    icon: ChartArea,
  },
  {
    path: "/home/settings",
    title: "Settings",
    icon: Settings,
  },
];

export const adminNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/home/employee",
    title: "Employees",
    icon: Users,
  },
  {
    path: "/home/chat",
    title: "Chats",
    icon: MessageCircle,
  },
  {
    path: "/home/task",
    title: "Task",
    icon: List,
  },
  {
    path: "/home/documents",
    title: "Documents",
    icon: File,
  },
  {
    path: "/home/departments",
    title: "Departments",
    icon: Building2,
  },
  {
    path: "/home/settings",
    title: "Settings",
    icon: Settings,
  },
];
