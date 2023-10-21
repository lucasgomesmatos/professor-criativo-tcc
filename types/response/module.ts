import { Activity } from "./activity";

export interface CourseModule {
  id: number;
  name: string;
  rated: boolean;
  assessment: string;
  description: string;
  modules: Module[];
  activities: Activity[];
}

export interface Module {
  id: number;
  name: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  name: string;
  duration: string;
  path: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  comment: string;
  user: UserComment;
  responses: ResponsesComment[];
}

export interface UserComment {
  id: number;
  name: string;
  avatar_path: string;
  admin: boolean;
}

export interface ResponsesComment {
  id: number;
  comment: string;
  user: UserComment;
}
