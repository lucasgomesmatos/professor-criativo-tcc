import { ElementType, HtmlHTMLAttributes } from "react";

interface ButtonActionVideoProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export const ButtonActionVideo = ({
  icon: Icon,
  ...rest
}: ButtonActionVideoProps) => {
  return (
    <button
      {...rest}
      className=" flex h-10 w-10 items-center justify-center rounded bg-purple-400 transition-all hover:bg-purple-300"
    >
      {rest.children || <Icon className="h-5 w-5 text-gray-900" />}
    </button>
  );
};
