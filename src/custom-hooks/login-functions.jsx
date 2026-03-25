import { devNavUrl } from "../config/config";

export const checkRoleToRedirect = (navigate, data) => {
  navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/`);
};
