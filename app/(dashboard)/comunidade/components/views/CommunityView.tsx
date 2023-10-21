"use client";
import { NameUserComment } from "@/app/(dashboard)/cursos/[lessons]/components/comments/comment/header/NameUserComment";
import { NoResult } from "@/components/base/noResult";
import { PostSkeleton } from "@/components/base/postSkeleton";
import { useFetch } from "@/hooks/useFetch/useFetch";
import { useIntersectionObserver } from "@/hooks/useObserve/useObserve";
import { getPosts } from "@/services/community";
import { formatDateISO } from "@/shared/utils/dateUtils/date";
import { useFilterStore } from "@/store/filter";
import { CommunityRequest } from "@/types/response/community";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useCommunityStore } from "../../store";
import { useCommunityPostCommentsStore } from "../../store/comments";
import { CarouselBase } from "../corousel";
import { DialogCommentPost } from "../dialog/dialogCommentPost";
import { PostDialogDelete } from "../dialog/dialogDeletePost";
import { PostDialogVisibility } from "../dialog/dialogVisibilityPost";
import { Post } from "../post";
import { ActionsPost } from "../post/header/ActionsPost";
import { AvatarPost } from "../post/header/AvatarPost";

export const CommunityView = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { filter } = useFilterStore();
  const { setPosts, updateDate, posts, listVisiblePosts } = useCommunityStore();
  const { setOpenDialogCommentPost, setUpdateDate } =
    useCommunityPostCommentsStore();

  const { data, isLoading, error, isFetching } = useFetch<CommunityRequest>(
    String(updateDate),
    () => getPosts(filter, currentPage, Number(listVisiblePosts)),
    filter,
    currentPage + Number(listVisiblePosts)
  );

  useEffect(() => {
    if (error instanceof Error) {
      toast.error("Erro de conexão");
      return;
    }

    data?.data && setPosts(data.data);
  }, [data, setPosts, error]);

  const showNoResult = !isLoading && !posts.length;
  const containerObserveScrollRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    containerRef: containerObserveScrollRef,
    setCurrentPage: setCurrentPage,
    data: data,
  });

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="w-full  rounded-md p-2">
      <div className="flex w-full  flex-col items-center justify-center gap-4">
        <div className="flex w-full  flex-col items-center justify-center gap-6">
          {showNoResult && <NoResult />}
          {isLoading ? (
            <PostSkeleton />
          ) : (
            posts?.map((post) => (
              <div key={post.id} id="container">
                <Post.Root className="bg-gray-700 p-4">
                  <Post.Header>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-4">
                        <AvatarPost
                          image={post.user.avatar_path}
                          name={post.user.name}
                        />
                        <NameUserComment
                          admin={post.user.admin}
                          nameUser={post.user.name}
                        />
                      </div>
                      <span className="flex items-center justify-center gap-2 text-center text-xs text-gray-200">
                        {!post.visible && (
                          <span className="font-bold tracking-wide text-red-600">
                            Não aprovado
                          </span>
                        )}
                        <span className="hidden md:block">
                          {formatDateISO(post.created_at)}
                        </span>
                        <ActionsPost
                          admin={post.user.admin}
                          userId={post.user.id}
                          post={post}
                        />
                      </span>
                    </div>
                  </Post.Header>
                  <Post.Content>
                    <div className="mt-4 w-full max-w-5xl overflow-hidden">
                      {post.attachments && (
                        <CarouselBase attachments={post.attachments} />
                      )}
                    </div>
                    <div className="mt-10 flex  flex-col justify-between gap-4">
                      <p className=" max-w-4xl flex-1"> {post.content}</p>
                      <div className="mt-4 flex w-full justify-between gap-4">
                        <button
                          onClick={() => {
                            setOpenDialogCommentPost(true, post);
                            setUpdateDate();
                          }}
                          className="w-38 flex items-center justify-center gap-4 rounded-md border border-purple-400 px-6 py-2 tracking-wide text-gray-50 transition-colors hover:bg-purple-400 hover:font-bold "
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span className="max-[460px]:hidden">Comentar </span>
                        </button>
                        {post.number_of_comments !== 0 && (
                          <button>
                            {post.number_of_comments > 1
                              ? `${post.number_of_comments} Comentários`
                              : `${post.number_of_comments} Comentário`}
                          </button>
                        )}
                      </div>
                    </div>
                  </Post.Content>
                </Post.Root>
              </div>
            ))
          )}
        </div>
        <div className="mb-8 flex items-center justify-center p-4">
          {!isLoading && isFetching && <span> Carregando...</span>}
        </div>

        <div ref={containerObserveScrollRef} />
        <PostDialogDelete />
        <PostDialogVisibility />
        <DialogCommentPost />
      </div>
    </div>
  );
};
