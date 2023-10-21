export interface AccountUser {
  data: Data;
  last_authentication: LastAuthentication;
}

export interface Data {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  type: string;
  avatar_path: string;
  date_purchase: string;
  coursesIPassed: coursesIPassed[];
  certificate_template: string;
}

export interface LastAuthentication {
  ip: string;
  date: string;
}

export interface coursesIPassed {
  created_at: string;
  duration: string;
  name: string;
}
