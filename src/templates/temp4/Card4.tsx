import { ArrowRight } from "../../utils/icons/ArrowRight";
import { useQuery } from "../../utils/custom hooks/UseQuery";

export function Card4() {
  const query = useQuery();
  const num = query.get("g") || 1;
  const d12 = query.get("p") || 0;

  const link = d12 ? `/temp4?g=${num}&p=true` : `/temp4?g=${num}`;

  return (
    <div>
      <div className="w-full h-screen bg-orangt4100 flex justify-center font-cormorant">
        <div className="md:w-8/12 flex flex-col justify-between">
          <div className="flex justify-center relative mt-14 md:mt-10">
            <span className="absolute left-4 m-auto text-3xl md:text-4xl">
              Pers. ({num})
            </span>
          </div>
          <div className="flex flex-col w-full h-full justify-evenly items-center">
            <span className="md:text-9xl text-6xl text-center md:mb-20">
              ABIGAIL & RENE
            </span>
            <span className="text-4xl text-center">¡Nos casamos!</span>
            <div className="flex items-center gap-4">
              <ArrowRight to={link} />
            </div>
          </div>
          <div className="text-4xl self-center mb-20">
            3 de Octubre 2024
          </div>
        </div>
      </div>
    </div>
  );
}
