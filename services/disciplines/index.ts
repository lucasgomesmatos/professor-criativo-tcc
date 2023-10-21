import { httpClient } from "@/shared/utils/axios/api";
import {
  Endpoint,
  Environment,
} from "@/shared/utils/axios/constants/environment";
import { queryStringSerializer } from "@/shared/utils/stringUtils/queryStringSerializer";

export const getDisciplines = async <T>(filter?: string | null, page = 1) => {
  const { data } = await httpClient.get<T>(Endpoint.DISCIPLINES, {
    params: {
      name: filter,
      page: page,
      paginate: Environment.LIMITE_DE_LINHAS,
    },
  });

  return data;
};

export const getYears = async <T>(
  disciplineId: number | null,
  filter?: string | null,
  page = 1
) => {
  const { data } = await httpClient.get<T>(
    `${Endpoint.DISCIPLINES}/${disciplineId}/${Endpoint.YEARS}`,
    {
      params: {
        name: filter,
        page: page,
        paginate: Environment.LIMITE_DE_LINHAS,
      },
      paramsSerializer: queryStringSerializer,
    }
  );
  return data;
};

export const getActivities = async <T>(
  disciplineId: number | null,
  filter?: string | null,
  page = 1
) => {
  const { data } = await httpClient.get<T>(
    `${Endpoint.DISCIPLINES}/${disciplineId}/activities`,
    {
      params: {
        name: filter,
        page: 1,
        paginate: 27 * page,
      },
    }
  );
  return data;
};
