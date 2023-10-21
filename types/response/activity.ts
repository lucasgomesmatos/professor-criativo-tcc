import { Links, Meta } from "./requestMeta";

export interface ActivityRequest {
  data: Activity[];
  links: Links;
  meta: Meta;
}

export interface Activity {
  id: number;
  name: string;
  slug: string;
  image_path: string;
  content: {
    path: string;
  }[];
  description: string;
}
