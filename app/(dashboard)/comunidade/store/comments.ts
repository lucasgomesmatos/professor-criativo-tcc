import { CommentPost, PostCommunity } from "@/types/response/community";
import { create } from "zustand";

export interface CommunityPostCommentsReducer {
  comments: CommentPost[] | null;
  setComments: (comments: CommentPost[] | null) => void;
  post: PostCommunity | null;
  openDialogCommentPost: boolean;
  setOpenDialogCommentPost: (open: boolean, post: PostCommunity | null) => void;

  updateDate: number;
  setUpdateDate: () => void;

  openResponseFormComment: boolean;
  commentId: number | null;
  setOpenResponseFormComment: (open: boolean, commentId: number | null) => void;

  openCommentUpdate: boolean;
  commentUpdate: CommentPost | null;
  setUpdateComment: (open: boolean, comment: CommentPost | null) => void;
  openDialogCommentDelete: boolean;
  commentDeleteId: number | null;
  setOpenDialogCommentDelete: (
    open: boolean,
    commentDeleteId: number | null
  ) => void;
}

export const useCommunityPostCommentsStore =
  create<CommunityPostCommentsReducer>((set, get) => ({
    comments: [],
    post: null,
    updateDate: 0,
    openDialogCommentPost: false,

    commentId: null,
    openResponseFormComment: false,

    commentUpdate: null,
    openCommentUpdate: false,

    openDialogCommentDelete: false,
    commentDeleteId: null,
    setOpenDialogCommentDelete: (
      open: boolean,
      commentDeleteId: number | null
    ) => {
      set({
        openDialogCommentDelete: open,
        commentDeleteId,
      });
    },

    setUpdateComment: (open: boolean, comment: CommentPost | null) => {
      set({
        openCommentUpdate: open,
        commentUpdate: comment,
      });
    },

    setOpenResponseFormComment: (open: boolean, commentId: number | null) => {
      set({
        openResponseFormComment: open,
        commentId: commentId,
      });
    },

    setComments: (comments: CommentPost[] | null) => {
      set({ comments: comments });
    },

    setOpenDialogCommentPost: (open: boolean, post: PostCommunity | null) => {
      set({
        openDialogCommentPost: open,
        post: post,
      });
    },
    setUpdateDate: () => {
      set({
        updateDate: Number(new Date()),
      });
    },
  }));
