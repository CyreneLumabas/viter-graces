import { devNavUrl } from "@/config/config";
import Dashboard from "@/pages/developer/dashboard/Dashboard";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/dashboard`,
    element: <Dashboard />,
  },
];
