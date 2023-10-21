import { Links, Meta } from "./requestMeta";

export interface EventRequest {
  data: Event[];
  links: Links;
  meta: Meta;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  path: string;
  image_path: string;
}
