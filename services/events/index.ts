import { httpClient } from "@/shared/utils/axios/api";
import {
  Endpoint,
  Environment,
} from "@/shared/utils/axios/constants/environment";

export const getEvents = async <T>(filter?: string | null, page = 1) => {
  const { data } = await httpClient.get<T>(Endpoint.EVENTS, {
    params: {
      name: filter,
      page: page,
      paginate: Environment.LIMITE_DE_LINHAS,
    },
  });

  return data;
};
