import { useLocation } from "react-router-dom";
import { ArrowRight } from "../../utils/icons/ArrowRight";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function Card1() {
  const query = useQuery();
  const num = query.get("g") || 1;
  const d12 = query.get("p") || 0;

  const link = d12 ? `/temp1?g=${num}&p=true` : `/temp1?g=${num}`;

  return (
    <div className="w-full h-screen bg-marmolado bg-cover bg-center flex justify-center text-slate-700">
      <div className="md:w-8/12 flex flex-col justify-between">
        <div className="flex justify-center font-bold relative  mt-14 md:mt-10 ">
          <span className="absolute left-4 m-auto font-forum text-3xl md:text-4xl">
            Pers. ({num})
          </span>
        </div>
        <div className="flex flex-col w-full h-full md:h-fit justify-evenly md:justify-between items-center ">
          <span className="font-seasons md:text-9xl text-6xl text-center md:mb-20">
            {" "}
            SOLE & GASTÓN{" "}
          </span>
          <span className="font-Font-2 text-4xl">¡Nos casamos!</span>
          <div className="self-center flex gap-4 ">
            <div>
              <div className="font-forum flex flex-col md:mt-32">
                <ArrowRight to={link} />
              </div>
            </div>
          </div>
        </div>
        <div className="font-forum text-4xl self-center mb-20">
          3 de Agosto 2024
        </div>
        <div></div>
      </div>
    </div>
  );
}
