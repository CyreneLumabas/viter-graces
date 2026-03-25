import { devNavUrl } from "@/config/config";
import Dashboard from "@/pages/developer/dashboard/Dashboard";

export const routesAccess = [
  {
    path: `${devNavUrl}/`,
    element: <Dashboard />,
  },
];
