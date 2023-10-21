"use client";

import { Button } from "@/components/base/button";
import { NoResult } from "@/components/base/noResult";
import { VideoPlayerLesson } from "@/components/base/videoPlayerLesson";
import { SeparatorBase } from "@/components/ui/separator";
import { useFetch } from "@/hooks/useFetch/useFetch";
import { getCourse } from "@/services/courses";
import { useFilterStore } from "@/store/filter";
import { CourseModule } from "@/types/response/module";
import {
  ChevronLeft,
  ChevronRight,
  File,
  FunctionSquare,
  Plus,
} from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useCoursesStore } from "../store";
import { Breadcrumb } from "./components/breadcrumb";
import { CommentDialogCreate } from "./components/comments/CommentDialogCreate";
import { CommentDialogDelete } from "./components/comments/CommentDialogDelete";
import { CommentDialogResponse } from "./components/comments/CommentDialogResponse";
import { CommentDialogUpdate } from "./components/comments/CommentDialogUpdate";
import { Comment } from "./components/comments/comment";
import { ActionsComment } from "./components/comments/comment/header/ActionsComment";
import { AvatarComment } from "./components/comments/comment/header/AvatarComment";
import { NameUserComment } from "./components/comments/comment/header/NameUserComment";
import { ButtonActionVideo } from "./components/feedback/ButtonActionVideo";
import { ButtonFeedback } from "./components/feedback/ButtonFeedback";
import { Header } from "./components/header";
import { Module } from "./components/module";

import { downloadPDF } from "@/shared/utils/download";

import { Loading as LoadingPage } from "@/components/base/loading";
import Link from "next/link";
import Loading from "react-loading";
import { useAccountUserStore } from "../../minha-conta/store";
import { RangeFeedback } from "./components/feedback/RangeFeedback";
import { useModulesStore } from "./store";
import { useCommentStore } from "./store/comment";
import { useFeedbackStore } from "./store/feedback";

export default function Activities() {
  const { filter } = useFilterStore();
  const { courseId } = useCoursesStore();
  const {
    setCourse,
    modules,
    prev,
    next,
    comments,
    dateUpdate,
    course,
    setReset,
    loading,
    setLoading,
    showQuiz,
  } = useModulesStore();
  const { setOpenDialogCommentCreate } = useCommentStore();
  const { setOpenDialogRangeFeedback } = useFeedbackStore();
  const { nameUser, cpfUser } = useAccountUserStore();

  const { data, isLoading, error } = useFetch<CourseModule>(
    String(dateUpdate),
    () => getCourse(courseId),
    filter,
    dateUpdate
  );

  useEffect(() => {
    if (error instanceof Error) {
      toast.error("Erro de conexão");
      return;
    }

    data && setCourse(data);

    return () => setReset();
  }, [data, error, setCourse, setReset]);

  const noResult = !isLoading && !modules?.length;

  if (!data) return <LoadingPage />;

  return (
    <section className="absolute left-0 mt-12 min-h-[80%] w-full bg-gray-900">
      <div className="container">
        <div className="mt-16">
          <Breadcrumb />

          {isLoading && noResult ? (
            <LoadingPage />
          ) : (
            <div className="flex h-max flex-col gap-6 rounded bg-gray-950 p-4">
              <div className="flex items-center justify-between">
                <Header />

                <ButtonFeedback
                  disabled={course?.rated!}
                  onClick={setOpenDialogRangeFeedback}
                />
              </div>
              <main className="flex rounded border border-gray-800 bg-gray-900 shadow max-[1030px]:flex-col max-[1030px]:gap-4">
                <div className="aspect-video h-[380px] flex-1">
                  <VideoPlayerLesson />
                </div>
                <aside className="h-[380px] w-72 divide-y-2 divide-gray-950 overflow-y-auto border-l border-gray-800 bg-gray-900 max-[1030px]:h-max max-[1030px]:w-full">
                  {modules &&
                    modules.map((module, index) => (
                      <Module
                        key={module.name}
                        moduleIndex={index}
                        title={module.name}
                        amountOfLessons={module.lessons.length}
                      />
                    ))}
                </aside>
              </main>
              <div className="-mt-4 flex justify-end  gap-2 rounded bg-gray-900 p-4">
                <ButtonActionVideo icon={ChevronLeft} onClick={prev} />
                <ButtonActionVideo icon={ChevronRight} onClick={next} />
              </div>

              <div className="mt-4 flex w-full flex-col gap-4">
                <div>
                  <h1 className="text-base text-gray-50">Descrição</h1>
                  <SeparatorBase
                    className="mt-1 h-[1px] w-full bg-gray-500"
                    orientation="vertical"
                  />
                </div>
                <p>{data?.description}</p>
              </div>
              {showQuiz.showButton && course?.assessment?.length && (
                <div className="mt-4 flex w-full flex-col gap-4">
                  <div>
                    <h1 className="text-base text-gray-50">
                      Emitir certificado
                    </h1>
                    <SeparatorBase
                      className="mt-1 h-[1px] w-full bg-gray-500"
                      orientation="vertical"
                    />
                  </div>
                  <Link href={course.assessment} target="_blank">
                    <Button className="w-38 flex  h-10 items-center gap-2 text-sm">
                      <FunctionSquare />{" "}
                      <span className="max-[460px]:hidden">Ir para o quiz</span>
                    </Button>
                  </Link>
                </div>
              )}

              {Boolean(data.activities.length) && (
                <div className="mt-4 flex w-full flex-col gap-4">
                  <div>
                    <h1 className="text-base text-gray-50">Atividades </h1>
                    <SeparatorBase
                      className="mt-1 h-[1px] w-full bg-gray-500"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-4 rounded bg-gray-900 p-2">
                    {loading && (
                      <span className="flex gap-2 px-4 py-3">
                        <Loading type="spokes" width={20} height={20} />
                        Aguarde, o download já está em andamento...
                      </span>
                    )}

                    {!loading &&
                      data?.activities.map((activity) => (
                        <div key={activity.id} className="flex flex-col gap-2">
                          <h6 className="text-sm font-bold">{activity.name}</h6>
                          {activity.content.map((pdf) => (
                            <div key={pdf.path}>
                              <button
                                onClick={() =>
                                  downloadPDF(
                                    activity.name,
                                    pdf.path,
                                    nameUser,
                                    cpfUser,
                                    setLoading
                                  )
                                }
                                className="w-38 flex cursor-pointer items-center justify-center gap-4 rounded bg-purple-400 px-4 py-3 text-gray-50 hover:bg-purple-500"
                              >
                                <File className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>
              )}
              <div className="mt-16 flex w-full flex-col gap-4">
                <div className="flex items-center justify-between ">
                  <h1 className="text-sm text-gray-50 max-[460px]:w-48 md:text-base">
                    Comentários relacionados à esta aula
                  </h1>
                  <Button
                    onClick={setOpenDialogCommentCreate}
                    className="w-38 flex  h-10 items-center gap-2 text-sm"
                  >
                    <Plus />{" "}
                    <span className="max-[460px]:hidden">Comentar</span>
                  </Button>
                </div>
                <div className="mb-20 mt-4 flex flex-col items-center gap-4 py-4 ">
                  {comments.length === 0 && <NoResult text="Sem comentários" />}
                  {comments.map((comment) => (
                    <>
                      <Comment.Root>
                        <Comment.Header className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-4">
                            <AvatarComment
                              image={comment.user.avatar_path}
                              name={comment.user.name}
                            />
                            <NameUserComment
                              admin={comment.user.admin}
                              nameUser={comment.user.name}
                            />
                          </div>
                          <ActionsComment
                            admin={comment.user.admin}
                            commentId={comment.id}
                            description={comment.comment}
                            userId={comment.user.id}
                          />
                        </Comment.Header>
                        <Comment.Description>
                          <p className="pt-6 text-sm">{comment.comment}</p>
                        </Comment.Description>
                        {Boolean(comment.responses.length !== 0) && (
                          <Comment.Footer responses={comment.responses} />
                        )}
                      </Comment.Root>
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}
          <CommentDialogCreate />
          <CommentDialogUpdate />
          <CommentDialogDelete />
          <CommentDialogResponse />
          <RangeFeedback />
        </div>
      </div>
    </section>
  );
}
