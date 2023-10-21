import { httpClient } from "@/shared/utils/axios/api";
import {
  Endpoint,
  Environment,
} from "@/shared/utils/axios/constants/environment";

export const getCourses = async <T>(filter?: string | null, page = 1) => {
  const { data } = await httpClient.get<T>(Endpoint.COURSES, {
    params: {
      name: filter,
      page: page,
      paginate: Environment.LIMITE_DE_LINHAS,
    },
  });

  return data;
};

export const getCourse = async <T>(courseId: number | null) => {
  const { data } = await httpClient.get<T>(`${Endpoint.COURSE}/${courseId}`);

  return data;
};
