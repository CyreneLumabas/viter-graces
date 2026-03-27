import { devNavUrl } from "@/config/config";
import Dashboard from "@/pages/developer/dashboard/Dashboard";
import Settings from "@/pages/developer/settings/Settings";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/dashboard`,
    element: <Dashboard />,
  },
  {
    path: `${devNavUrl}/settings`,
    element: <Settings />,
  },
];
