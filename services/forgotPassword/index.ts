import { Endpoint } from "@/shared/utils/axios/constants/environment";
import { SendResetPassword } from "@/types/request/sendResetPassword";
import axios from "axios";

export const forgotPasswordRequest = async (email: string | null) => {
  const response = await axios.post(Endpoint.FORGOT_PASSWORD, {
    email,
  });

  return response.data;
};

export const resetPasswordRequest = async (data: SendResetPassword) => {
  const response = await axios.post(Endpoint.RESET_PASSWORD, {
    email: data.email,
    token: data.token,
    password: data.password,
    password_confirmation: data.password_confirmation
  });

  return response.data;
};
