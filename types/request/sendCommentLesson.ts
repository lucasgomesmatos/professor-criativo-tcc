export interface SendCreateCommentLesson {
  courseId: number | undefined;
  moduleId: number | undefined;
  lessonId: number | undefined;
  comment: string;
}

export interface SendUpdateCommentLesson {
  commentId: number;
  courseId: number | undefined;
  moduleId: number | undefined;
  lessonId: number | undefined;
  comment: string;
}

export interface SendDeleteCommentLesson {
  commentId: number;
  courseId: number | undefined;
  moduleId: number | undefined;
  lessonId: number | undefined;
}

export interface CommentLesson {
  commentId: number | number;
  comment: string;
}
export interface CommentResponseLesson {
  commentResponseId: number;
  comment: string;
}

export interface SendResponseCommentLesson {
  commentId: number;
  courseId: number | undefined;
  moduleId: number | undefined;
  lessonId: number | undefined;
  comment: string;
}
