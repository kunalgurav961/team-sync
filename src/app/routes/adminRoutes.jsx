import Departments from "../../features/Admin Module/departments/ui/pages/Departments";
import Documents from "../../features/Admin Module/documents/ui/pages/Documents";
import AddEmployee from "../../features/Admin Module/employees/ui/pages/AddEmployee";
import Employee from "../../features/Admin Module/employees/ui/pages/Employee";
import Task from "../../features/Admin Module/task/ui/pages/Task";
import Chat from "../../features/chats/ui/pages/Chat";
import Settings from "../../features/settings/ui/pages/Settings";

export const AdminRoutes = [
  {
    path: "/home/employee",
    element: <Employee />,
  },

  {
    path: "/home/task",
    element: <Task />,
  },
  {
    path: "/home/departments",
    element: <Departments />,
  },
  {
    path: "/home/chats",
    element: <Chat />,
  },
  {
    path: "/home/documents",
    element: <Documents />,
  },
  {
    path: "/home/settings",
    element: <Settings />,
  },
  {
    path: "/home/add-employee",
    element: <AddEmployee />,
  },
];
