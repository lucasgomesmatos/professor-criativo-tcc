import { httpClient } from "@/shared/utils/axios/api";
import { Endpoint } from "@/shared/utils/axios/constants/environment";
import {
  SendCreateCommentLesson,
  SendDeleteCommentLesson,
  SendResponseCommentLesson,
  SendUpdateCommentLesson,
} from "@/types/request/sendCommentLesson";

export const sendCreateCommentLesson = async ({
  comment,
  courseId,
  moduleId,
  lessonId,
}: SendCreateCommentLesson) => {
  const { data } = await httpClient.post(
    `${Endpoint.COURSES}/${courseId}/modules/${moduleId}/lessons/${lessonId}/comments`,
    {
      comment,
    }
  );
  return data;
};

export const sendUpdateCommentLesson = async ({
  commentId,
  comment,
  courseId,
  moduleId,
  lessonId,
}: SendUpdateCommentLesson) => {
  const { data } = await httpClient.put(
    `${Endpoint.COURSES}/${courseId}/modules/${moduleId}/lessons/${lessonId}/comments/${commentId}`,
    {
      comment,
    }
  );
  return data;
};

export const sendDeleteCommentLesson = async ({
  commentId,
  courseId,
  moduleId,
  lessonId,
}: SendDeleteCommentLesson) => {
  const { data } = await httpClient.delete(
    `${Endpoint.COURSES}/${courseId}/modules/${moduleId}/lessons/${lessonId}/comments/${commentId}`
  );
  return data;
};

export const sendCreateResponseCommentLesson = async ({
  commentId,
  comment,
  courseId,
  moduleId,
  lessonId,
}: SendResponseCommentLesson) => {
  const { data } = await httpClient.post(
    `${Endpoint.COURSES}/${courseId}/modules/${moduleId}/lessons/${lessonId}/comments/${commentId}/respond`,
    {
      comment,
    }
  );
  return data;
};
