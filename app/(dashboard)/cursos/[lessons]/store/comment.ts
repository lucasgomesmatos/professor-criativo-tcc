import { Comment } from "@/types/response/module";
import { create } from "zustand";

export interface CommentReducer {
  openDialogCommentCreate: boolean;
  openDialogCommentUpdate: boolean;
  openDialogCommentDelete: boolean;
  openDialogCommentResponse: boolean;
  setOpenDialogCommentCreate: () => void;
  setOpenDialogCommentResponse: (commentId: number | null) => void;
  setOpenDialogCommentDelete: (open: boolean, commentId: number | null) => void;
  setOpenDialogCommentUpdate: (
    open: boolean,
    commentId: number | null,
    comment: string | null
  ) => void;
  comments: Comment | null;
  commentUpdate: {
    commentId: number | null;
    comment: string | null;
  } | null;
  commentDeleteId: number | null;
  commentResponseId: number | null;
}

export const useCommentStore = create<CommentReducer>((set, get) => ({
  comments: null,
  commentUpdate: null,
  commentDeleteId: null,
  commentResponseId: null,
  openDialogCommentCreate: false,
  openDialogCommentUpdate: false,
  openDialogCommentDelete: false,
  openDialogCommentResponse: false,

  setOpenDialogCommentCreate: () => {
    const { openDialogCommentCreate } = get();
    set({ openDialogCommentCreate: !openDialogCommentCreate });
  },
  setOpenDialogCommentResponse: (commentId: number | null) => {
    const { openDialogCommentResponse } = get();
    set({
      commentResponseId: commentId,
      openDialogCommentResponse: !openDialogCommentResponse,
    });
  },

  setOpenDialogCommentDelete: (open: boolean, commentId: number | null) => {
    set({ openDialogCommentDelete: open, commentDeleteId: commentId });
  },
  setOpenDialogCommentUpdate: (
    open: boolean,
    commentId: number | null,
    comment: string | null
  ) => {
    set({
      openDialogCommentUpdate: open,
      commentUpdate: {
        commentId,
        comment,
      },
    });
  },
}));
