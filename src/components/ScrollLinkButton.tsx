import { Link as ScrollLink } from "react-scroll";

export const ScrollLinkButton = ({ to, color, title }: { to: string, color?:string , title?:string  }) => {

  return (
    <ScrollLink
      className={`flex items-center cursor-pointer w-fit px-4 rounded-full border hover:white hover:opacity-45 p-2 ${color ? color : "border-white"}`}
      to={to}
      smooth={true}
      duration={500}
    >
      {title ? title : "Registro"}
    </ScrollLink>
  );
};
