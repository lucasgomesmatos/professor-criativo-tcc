import { Star } from "lucide-react";
import { HtmlHTMLAttributes } from "react";

interface ButtonFeedbackProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
}

export const ButtonFeedback = ({ disabled, ...rest }: ButtonFeedbackProps) => {
  return (
    <button
      disabled={disabled}
      {...rest}
      className=" w-38 flex h-10 items-center gap-2 rounded bg-purple-500 p-4  text-sm font-bold tracking-wide text-gray-50 transition-colors hover:bg-purple-400 hover:text-gray-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-950"
    >
      <Star className="h-4 w-4" />
      <span className="hidden text-sm md:block">Deixar Feedback</span>
    </button>
  );
};
