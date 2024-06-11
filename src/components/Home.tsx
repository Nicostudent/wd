import GastoniPuerto from "../assets/images/GastoniPuerto.jpg";
import { UseWindowSize } from "../utils/custom hooks/UseWindowSize";
import { WebNavBar } from "./WebNavBar";
import { MobileNavBar } from "./MobileNavBar";
import flowers from "../assets/vectorsPNG/flowers.png";
import { useState } from "react";

export const Home = () => {
  const isMobile = UseWindowSize();
  const [sepia, setSepia] = useState(false);

  return (
    <div className="h-screen">
      {isMobile ? (
        <div id="home" className="absolute max-h-screen">
          <div className="flex justify-between gap-10 p-1 ">
            <MobileNavBar />
            <span className="self-center text-center justify-center font-Dosis font-bold ">
              S&G
            </span>
            <span></span>
          </div>
          <img
            className="rotate-45 relative top-5 right-10 overflow-hidden w-20"
            src={flowers}
            alt="flowers"
          />
          <div className="flex justify-center  absolute top-20 left-10 right-0 bottom-0 m-auto z-10 ">
            <div className="flex flex-col h-fit text-center gap-5">
              <span className="font-mono">05.08.2024</span>
              <span className="text-3xl">Save The Date</span>
            </div>
          </div>
          <div className="flex justify-center ">
            <span className="text-xl font-light font-mono flex justify-center mx-6 mt-10">
              NOS CASAMOS Y QUEREMOS QUE SEAS PARTE DE ESTE DÍA.
            </span>
          </div>
          <div className="flex justify-center mt-10">
            <img
              onClick={() => setSepia(!sepia)}
              className={`w-11/12 rounded-3xl ${
                sepia ? "sepia-[.75] " : ""
              } pb-2 z-50`}
              src={GastoniPuerto}
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-end items-start w-full">
          <div className="w-10/12 flex items-center  relative">
            <div className="w-6/12 lex justify-center ">
              <img
                className="rotate-45 absolute top-0 left-0 right-10 "
                src={flowers}
                alt=""
              />
              <div className="flex flex-col text-start pl-10">
                <span className="font-mono text-3xl my-10 pl-2">
                  05.08.2024
                </span>
                <span className="text-9xl">Save The Date</span>
                <span className="text-4xl font-light font-mono mt-10 w-2/3">
                  NOS CASAMOS Y QUEREMOS QUE SEAS PARTE DE ESTE DÍA.
                </span>
              </div>
            </div>
            <img
              className={`w-5/12 rounded-md ${sepia ? "sepia-[.75] " : ""} pb-2 z-50`}
              onClick={() => setSepia(!sepia)}
              src={GastoniPuerto}
              alt="asd"
            />
          </div>
          <div className="absolute bottom-10 left-0 right-0 m-auto ">
            <WebNavBar />
          </div>
        </div>
      )}
    </div>
  );
};
