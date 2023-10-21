import { CommentRoot } from "./CommentRoot";
import { DescriptionComment } from "./description/DescriptionComment";
import { HeaderComment } from "./header/HeaderComment";
import { ResponseComment } from "./response/ResponseComment";

export const Comment = {
  Root: CommentRoot,
  Header: HeaderComment,
  Description: DescriptionComment,
  Footer: ResponseComment,
};
