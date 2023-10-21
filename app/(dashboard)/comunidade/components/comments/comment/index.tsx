import { CommentRoot } from "./CommentRoot";
import { DescriptionComment } from "./description/DescriptionComment";
import { HeaderComment } from "./header/HeaderComment";
import { ResponseComment } from "./response/ResponseComment";
import { ResponseCommentForm } from "./response/ResponseFormComment";

export const Comment = {
  Root: CommentRoot,
  Header: HeaderComment,
  Description: DescriptionComment,
  Footer: ResponseComment,
  FooterResponse: ResponseCommentForm,
};
