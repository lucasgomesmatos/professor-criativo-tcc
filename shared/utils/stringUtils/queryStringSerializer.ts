import qs from "qs";

export const queryStringSerializer = (params: Record<string, any>) =>
  qs.stringify(params);
