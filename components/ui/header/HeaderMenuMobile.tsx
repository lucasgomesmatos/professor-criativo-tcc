import { ElementType, HtmlHTMLAttributes } from "react";

interface HeaderMenuMobileProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export const HeaderMenuMobile = ({
  icon: Icon,
  ...rest
}: HeaderMenuMobileProps) => {
  return (
    <button {...rest}>
      <Icon
        size={32}
        className="cursor-pointer transition duration-700 ease-out"
      />
    </button>
  );
};
