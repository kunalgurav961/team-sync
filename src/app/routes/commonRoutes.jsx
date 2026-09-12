import { Settings } from "lucide-react";
import Home from "../../features/dashboard/ui/pages/Home";
import Chat from "../../features/chats/ui/pages/Chat";

export const commonRoutes = [
    {
        path: '',
        element: <Home />
    },
    {
        path: 'settings',
        element: <Settings />
    },
    {
        path: 'chat',
        element: <Chat />
    }
]