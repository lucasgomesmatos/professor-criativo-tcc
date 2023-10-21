import { httpClient } from "@/shared/utils/axios/api";
import { Endpoint } from "@/shared/utils/axios/constants/environment";
import { User } from "@/types/response/user";

export interface UserCredentials {
  email: string;
  password: string;
}

export const loginRequest = async (credentials: UserCredentials) => {
  const { email, password } = credentials;

  const response = await httpClient.post<User>(Endpoint.LOGIN, {
    email,
    password,
  });

  return response.data;
};
