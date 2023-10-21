import { Links, Meta } from "./requestMeta";

export interface NotificationsRequest {
  data: Notification[];
  links: Links;
  meta: Meta;
}

export interface Notification {
  id: number;
  title: string;
  description: string;
  visualized: boolean;
}
