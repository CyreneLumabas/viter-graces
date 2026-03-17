import { devNavUrl } from "@/components/helpers/functions-general";
import Dashboard from "@/pages/dashboard/Dashboard";

export const routesAccess = [
  {
    path: `${devNavUrl}/`,
    element: <Dashboard />,
  },
];
