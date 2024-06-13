import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Temp1 } from "./assets/templates/Temp1";
import { ArrowRight } from "./utils/icons/ArrowRight";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-bgFlowers bg-cover flex justify-center text-slate-700">
      <div className="md:w-8/12  flex flex-col justify-between">
        <div className="flex justify-center mt-2 md:mt-20 font-bold relative">
          <span className="font-Font-1 text-3xl text-slate-700 text-center">
            S&G
          </span>
          <span className="absolute right-2 top-0 m-auto font-Font-3 md:text-2xl">
            Per. (2)
          </span>
        </div>
        <div className="flex flex-col w-full h-full md:h-fit justify-evenly md:justify-between items-center ">
          <span className="font-Font-1 md:text-9xl text-8xl md:mb-20">
            {" "}
            SOLE & GASTÓN{" "}
          </span>
          <span className="font-Font-2 text-4xl ">¡Nos casamos!</span>
          <div className="self-center flex gap-4 ">
            <div>
              <div className="font-Font-3 flex flex-col md:mt-32">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="font-Font-1 text-4xl font-bold self-center mb-20">
          3 de Agosto 2024
        </div>
        <div></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<Temp1 />} />
    </Routes>
  );
}

export default App;
