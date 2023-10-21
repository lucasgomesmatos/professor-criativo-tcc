"use cliente";
import { Pencil } from "lucide-react";
import { ComponentProps } from "react";

type TextareaCommunityProps = ComponentProps<"textarea">;

export const TextareaCommunity = ({ ...rest }: TextareaCommunityProps) => {
  return (
    <>
      <label
        htmlFor="content"
        className="flex items-center gap-2 text-sm text-gray-200"
      >
        <Pencil className="h-4 w-4" />
        Escreva aqui sua experiência:
      </label>
      <textarea
        {...rest}
        spellCheck={false}
        placeholder="Fique a vontade para adicionar relatos sobre essa experiência que você quer compartilhar conosco."
        className="min-h-[200px] w-full flex-1 resize-none rounded border-0 bg-gray-800 p-3 text-base leading-relaxed text-gray-50 placeholder:text-gray-300 focus:ring-purple-400"
      />
    </>
  );
};
