import { Attachments, PostCommunity } from "@/types/response/community";
import { create } from "zustand";

export interface CommunityReducer {
  posts: PostCommunity[];
  setPosts: (posts: PostCommunity[]) => void;
  openDrawerCommunity: boolean;
  setOpenDrawerCommunity: () => void;
  updateDate: number;
  setUpdateDate: () => void;

  openDialogUploadImageCommunity: boolean;
  setOpenDialogUploadImageCommunity: () => void;

  newImagePostCommunity: File | null;
  imagePostCommunity: File | null;
  videoPostCommunity: File | null;

  setImageUploadPost: (image: File) => void;
  setNewImageUploadPost: (image: File | null) => void;
  setDeleteImageUploadPost: () => void;
  setVideoUploadPost: (video: File) => void;
  setDeleteVideoUploadPost: () => void;

  postDeleteId: number | null;
  openDialogPostDelete: boolean;
  setOpenDialogPostDelete: (open: boolean, postDeleteId: number | null) => void;

  postUpdate: PostCommunity | null;
  setPostUpdate: (postUpdate: PostCommunity | null) => void;
  imageUpdatePost: Attachments | null;
  videoUpdatePost: Attachments | null;
  setDeleteImagePostUpdate: () => void;
  setDeleteVideoPostUpdate: () => void;

  listVisiblePosts: boolean;
  setListVisiblePosts: () => void;
  postVisibilityId: number | null;
  openDialogPostVisibility: boolean;
  setOpenDialogPostVisibility: (
    open: boolean,
    postVisibilityId: number | null
  ) => void;
}

export const useCommunityStore = create<CommunityReducer>((set, get) => ({
  posts: [],
  openDrawerCommunity: false,
  updateDate: 0,
  openDialogUploadImageCommunity: false,

  newImagePostCommunity: null,
  imagePostCommunity: null,
  videoPostCommunity: null,

  openDialogPostDelete: false,
  postDeleteId: null,

  postUpdate: null,
  imageUpdatePost: null,
  videoUpdatePost: null,

  listVisiblePosts: true,

  postVisibilityId: null,
  openDialogPostVisibility: false,
  setOpenDialogPostVisibility: (
    open: boolean,
    postVisibilityId: number | null
  ) => {
    set({
      openDialogPostVisibility: open,
      postVisibilityId: postVisibilityId,
    });
  },

  setListVisiblePosts: () => {
    const { listVisiblePosts } = get();
    set({ listVisiblePosts: !listVisiblePosts });
  },

  setDeleteImagePostUpdate: () => {
    set({ imageUpdatePost: null });
  },
  setDeleteVideoPostUpdate: () => {
    set({ videoUpdatePost: null });
  },
  setPostUpdate: (postUpdate: PostCommunity | null) => {
    const imageUpdate = postUpdate?.attachments.find(
      (image) => image.type === "image"
    );
    const videoUpdate = postUpdate?.attachments.find(
      (image) => image.type === "video"
    );

    set({
      postUpdate: postUpdate,
      imageUpdatePost: imageUpdate,
      videoUpdatePost: videoUpdate,
    });
  },

  setOpenDialogPostDelete: (open: boolean, postDeleteId: number | null) => {
    set({ openDialogPostDelete: open, postDeleteId: postDeleteId });
  },

  setOpenDialogUploadImageCommunity: () => {
    const { openDialogUploadImageCommunity } = get();
    set({ openDialogUploadImageCommunity: !openDialogUploadImageCommunity });
  },

  setPosts: (posts: PostCommunity[]) => {
    set({ posts: posts });
  },
  setOpenDrawerCommunity: () => {
    const { openDrawerCommunity } = get();

    set({ openDrawerCommunity: !openDrawerCommunity });
  },

  setImageUploadPost: (image: File) => {
    set({ imagePostCommunity: image });
  },
  setNewImageUploadPost: (image: File | null) => {
    set({ newImagePostCommunity: image });
  },
  setDeleteImageUploadPost: () => {
    set({ imagePostCommunity: null });
  },
  setVideoUploadPost: (video: File) => {
    set({ videoPostCommunity: video });
  },

  setDeleteVideoUploadPost: () => {
    set({ videoPostCommunity: null });
  },

  setUpdateDate: () => [
    set({
      updateDate: Number(new Date()),
      newImagePostCommunity: null,
      imagePostCommunity: null,
      videoPostCommunity: null,
    }),
  ],
}));
