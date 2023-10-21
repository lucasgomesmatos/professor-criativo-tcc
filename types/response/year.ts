import { Links, Meta } from "./requestMeta";

export interface YearRequest {
  data: Year[];
  links: Links;
  meta: Meta;
}

export interface Year {
  id: number;
  name: string;
  description: string;
  slug: string;
}
