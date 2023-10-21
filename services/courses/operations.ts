import { useModulesStore } from "@/app/(dashboard)/cursos/[lessons]/store";
import {
  CommentLesson,
  CommentResponseLesson,
} from "@/types/request/sendCommentLesson";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  sendCreateCommentLesson,
  sendCreateResponseCommentLesson,
  sendDeleteCommentLesson,
  sendUpdateCommentLesson,
} from "./comment";

export const useSendCreateCommentRequest = (funcAction: () => void) => {
  const {
    course,
    modules,
    currentLessonIndex,
    currentModuleIndex,
    setUpdateDate,
  } = useModulesStore();

  const courseId = course?.id;
  let moduleId: number;
  let lessonId: number;
  if (modules) {
    moduleId = modules[currentModuleIndex]?.id;
    lessonId = modules[currentModuleIndex]?.lessons[currentLessonIndex]?.id;
  }

  return useMutation(
    (comment: string) =>
      sendCreateCommentLesson({
        courseId,
        moduleId,
        lessonId,
        comment: comment,
      }),
    {
      onSuccess: () => {
        toast.success("Comentário criado com sucesso.");
        setUpdateDate();
        funcAction();
      },
      onError: () => {
        toast.error("Error ao criar o comentário");
      },
    }
  );
};

export const useSendUpdateCommentRequest = (funcAction: () => void) => {
  const {
    course,
    modules,
    currentLessonIndex,
    currentModuleIndex,
    setUpdateDate,
  } = useModulesStore();

  const courseId = course?.id;
  let moduleId: number;
  let lessonId: number;
  if (modules) {
    moduleId = modules[currentModuleIndex]?.id;
    lessonId = modules[currentModuleIndex]?.lessons[currentLessonIndex]?.id;
  }

  return useMutation(
    ({ commentId, comment }: CommentLesson) =>
      sendUpdateCommentLesson({
        commentId,
        courseId,
        moduleId,
        lessonId,
        comment: comment,
      }),
    {
      onSuccess: () => {
        toast.success("Comentário criado com sucesso.");
        setUpdateDate();
        funcAction();
      },
      onError: () => {
        toast.error("Error ao criar o comentário");
      },
    }
  );
};
export const useSendDeleteCommentRequest = (funcAction: () => void) => {
  const {
    course,
    modules,
    currentLessonIndex,
    currentModuleIndex,
    setUpdateDate,
  } = useModulesStore();

  const courseId = course?.id;
  let moduleId: number;
  let lessonId: number;
  if (modules) {
    moduleId = modules[currentModuleIndex]?.id;
    lessonId = modules[currentModuleIndex]?.lessons[currentLessonIndex]?.id;
  }

  return useMutation(
    (commentId: number) =>
      sendDeleteCommentLesson({
        commentId,
        courseId,
        moduleId,
        lessonId,
      }),
    {
      onSuccess: () => {
        toast.success("Comentário excluído com sucesso.");
        setUpdateDate();
        funcAction();
      },
      onError: () => {
        toast.error("Error ao excluir");
      },
    }
  );
};

export const useSendResponseCommentRequest = (funcAction: () => void) => {
  const {
    course,
    modules,
    currentLessonIndex,
    currentModuleIndex,
    setUpdateDate,
  } = useModulesStore();

  const courseId = course?.id;
  let moduleId: number;
  let lessonId: number;
  if (modules) {
    moduleId = modules[currentModuleIndex]?.id;
    lessonId = modules[currentModuleIndex]?.lessons[currentLessonIndex]?.id;
  }

  return useMutation(
    ({ commentResponseId, comment }: CommentResponseLesson) =>
      sendCreateResponseCommentLesson({
        commentId: commentResponseId,
        courseId,
        moduleId,
        lessonId,
        comment: comment,
      }),
    {
      onSuccess: () => {
        toast.success("Resposta criada com sucesso.");
        setUpdateDate();
        funcAction();
      },
      onError: () => {
        toast.error("Error ao responder");
      },
    }
  );
};
