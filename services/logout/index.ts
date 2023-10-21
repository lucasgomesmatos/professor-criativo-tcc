import { httpClient } from "@/shared/utils/axios/api";
import { Endpoint } from "@/shared/utils/axios/constants/environment";

export const logoutRequest = async () => {
  const response = await httpClient.delete(Endpoint.LOGOUT);
  return response.data;
};
