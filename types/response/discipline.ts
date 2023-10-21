import { Links, Meta } from "./requestMeta";

export interface DisciplineRequest {
  data: Discipline[];
  links: Links;
  meta: Meta;
}

export interface Discipline {
  id: number;
  name: string;
  description: string;
  slug: string;
}
