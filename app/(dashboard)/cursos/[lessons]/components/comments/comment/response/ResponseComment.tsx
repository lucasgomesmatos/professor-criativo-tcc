import { cn } from "@/lib/utils";
import { ResponsesComment } from "@/types/response/module";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { HTMLAttributes } from "react";
import { AvatarComment } from "../header/AvatarComment";
import { NameUserComment } from "../header/NameUserComment";

interface ResponseCommentProps extends HTMLAttributes<HTMLDivElement> {
  responses: ResponsesComment[];
}

export const ResponseComment = ({
  responses,
  ...rest
}: ResponseCommentProps) => {
  return (
    <footer className={cn("mt-4", rest.className)} {...rest}>
      <Collapsible.Root className="group transition-all">
        <Collapsible.Trigger className="flex w-full">
          <span className="ml-auto flex cursor-pointer gap-2 px-4 text-sm text-gray-300 transition-all hover:text-gray-200 group-data-[state=open]:text-gray-200">
            {responses.length > 1 ? "Respostas" : "Resposta"}
            <ChevronDown className="h-5 w-5 group-data-[state=open]:rotate-180" />
          </span>
        </Collapsible.Trigger>
        <Collapsible.Content className="mt-2 flex flex-col gap-4 ">
          {responses?.map((response) => (
            <div key={response.id} className="rounded bg-gray-700  p-4">
              <div className="flex gap-4">
                <AvatarComment
                  image={response.user.avatar_path}
                  name={response.user.name}
                />
                <NameUserComment
                  admin={response.user.admin}
                  nameUser={response.user.name}
                />
              </div>
              <p className="pt-6 text-sm">{response.comment}</p>
            </div>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </footer>
  );
};
