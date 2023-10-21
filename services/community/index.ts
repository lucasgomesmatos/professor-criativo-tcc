import { httpClient } from "@/shared/utils/axios/api";
import {
  Endpoint,
  Environment,
} from "@/shared/utils/axios/constants/environment";

export const getPosts = async <T>(
  filter?: string | null,
  page = 1,
  postsVisible?: number
) => {
  const { data } = await httpClient.get<T>(Endpoint.COMMUNITY_POST, {
    params: {
      name: filter,
      page: 1,
      paginate: Environment.LIMITE_DE_LINHAS * page,
      visible: postsVisible,
    },
  });

  return data;
};

export const createPostRequest = async (formData: FormData) => {
  const response = await httpClient.post(Endpoint.COMMUNITY_POST, formData);

  return response.data;
};

export const updatePostRequest = async (
  postId: number | undefined,
  formData: FormData
) => {
  const response = await httpClient.post(
    `${Endpoint.COMMUNITY_POST}/${postId}`,
    formData
  );

  return response.data;
};

export const deletePostRequest = async (deletePostId: number | null) => {
  const response = await httpClient.delete(
    `${Endpoint.COMMUNITY_POST}/${deletePostId}`
  );

  return response.data;
};

export const updateVisibilityPostRequest = async (postId: number | null) => {
  const response = await httpClient.patch(
    `${Endpoint.COMMUNITY_POST}/${postId}/change-visibility`
  );

  return response.data;
};

export const getCommentsPost = async <T>(
  postId: number | undefined,
  page = 1
) => {
  const { data } = await httpClient.get<T>(
    `${Endpoint.COMMUNITY_POST}/${postId}/comments`,
    {
      params: {
        page: 1,
        paginate: Environment.LIMITE_DE_LINHAS * page,
      },
    }
  );

  return data;
};

export const createCommentPostRequest = async (
  postId: number | undefined,
  comment: string
) => {
  const response = await httpClient.post(
    `${Endpoint.COMMUNITY_POST}/${postId}/comments`,
    {
      comment,
    }
  );

  return response.data;
};

export const updateCommentPostRequest = async (
  commentId: number | undefined,
  postId: number | undefined,
  comment: string
) => {
  const response = await httpClient.patch(
    `${Endpoint.COMMUNITY_POST}/${postId}/comments/${commentId}`,
    {
      comment,
    }
  );

  return response.data;
};

export const deleteCommentPostRequest = async (
  commentId: number | null,
  postId: number | undefined
) => {
  const response = await httpClient.delete(
    `${Endpoint.COMMUNITY_POST}/${postId}/comments/${commentId}`
  );

  return response.data;
};

export const createResponseCommentPostRequest = async (
  postId: number | undefined,
  comment: string,
  commentId: number | null
) => {
  const response = await httpClient.post(
    `${Endpoint.COMMUNITY_POST}/${postId}/comments`,
    {
      comment,
      post_comment_id: commentId,
    }
  );

  return response.data;
};
