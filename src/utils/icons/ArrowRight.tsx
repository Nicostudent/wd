import { Link } from "react-router-dom";

export const ArrowRight = () => {
  return (
    <Link
      to="/main"
      className="font-forum font-bold md:text-4xl  text-2xl flex gap-4   "
    >
 <div className="flex flex-col">

      <span className="text-center self-center">Confirmar asistencia <u>acá</u></span>
      <span className="text-sm text-center">Hasta el 22/07/2024</span>
 </div>
    </Link>
  );
};
