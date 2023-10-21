import { Activity } from "./activity";
import { Links, Meta } from "./requestMeta";

export interface CourseRequest {
  data: Course[];
  links: Links;
  meta: Meta;
}

export interface Course {
  id: number;
  name: string;
  slug: string;
  description: string;
  activities: Activity[];
}
