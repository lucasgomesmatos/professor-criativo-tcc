export interface SendResetPassword {
  email: string | null;
  token: string | null;
  password: string;
  password_confirmation: string | null;
}
