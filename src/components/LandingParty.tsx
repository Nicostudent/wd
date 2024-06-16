import { useLocation } from "react-router-dom";
import { ArrowRight } from "../utils/icons/ArrowRight";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
 export function LandingParty() {
    const query = useQuery();
    const num = query.get('guest'); 
    // const hasQuery = query.has('guest');
    if (query.toString() != 'guest=' + num){
      return (
        <div className="w-full h-screen flex items-center justify-center  text-4xl bg-marmolado bg-cover bg-center font-seasons">
          Ops! Bad Request
        </div>
      );
    }
    console.log(num);
    return (
      <div className="w-full h-screen bg-marmolado bg-cover bg-center flex justify-center text-slate-700">
        <div className="md:w-8/12 flex flex-col justify-between">
          <div className="flex justify-center mt-2 md:mt-20 font-bold relative">
            <span className="font-seasons text-3xl text-slate-700 text-center">
              S & G 
            </span>
            <span className="absolute right-2 top-0 m-auto font-forum md:text-2xl">
              Per. ({num})
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
                  <ArrowRight to="/party" />
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