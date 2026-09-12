import Attendance from "../../features/Employee Module/Attendance/ui/pages/Attendance";
import MyTask from "../../features/Employee Module/MyTask/ui/pages/MyTask";
import Profile from "../../features/Employee Module/Profile/ui/pages/Profile";
import Settings from "../../features/settings/ui/pages/Settings";

export const employeeRoutes = [
    {
        path: '/home/myTask',
        element: <MyTask />
    },
    // {
    //     path: '/home/profile',
    //     element: <Profile />
    // },
    {
        path: '/home/attendance',
        element: <Attendance />
    },
    {
        path: '/home/settings',
        element: <Settings />
    },
]