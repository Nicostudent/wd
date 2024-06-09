import { NavBar } from "./NavBar";
import SepiaGrisHome from "../assets/images/SepiaGrisHome.jpg";
import { useEffect, useState } from "react";
import { Burger } from "../utils/icons/Burger";

export const Home = ({
  she,
  he,
  date,
  city,
}: {
  she: string;
  he: string;
  date: string;
  city: string;
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="h-screen border-4 border-red-500">
      {isMobile ? (
        <div >
          <div className="flex justify-start gap-10">
            <Burger />
            <span>S&G</span>
          </div>
          <div className="flex justify-center">
            <img
              className="object-scale-down  w-3/3 rounded-md"
              src={SepiaGrisHome}
              alt="asd"
            />
          </div>
          <div id="home" className="flex flex-col justify-start items-center ">
            <div className="flex flex-col justify-center items-center">
              <span className="text-7xl font-light font-Gwendolyn">
                Our Day
              </span>
              <span className="text-slate-900 opacity-70 text-4xl font-bold mb-2">
                {she} & {he}
              </span>
            </div>
            <div className="text-slate-900 opacity-70 flex flex-col text-lg font-light justify-center items-center mb-16">
              <span>
                {date} * {city}
              </span>
              <span>82 Days to Go!</span>
            </div>
          </div>          
        </div>
      ) : (
        <div>
          <div id="home" className="flex flex-col justify-start items-center ">
            <div className="flex flex-col gap-10 justify-center items-center">
              <span className="text-9xl font-light mt-24 font-Gwendolyn">
                Our Day
              </span>
              <span className="text-slate-900 opacity-70 text-6xl font-bold mb-5">
                {she} & {he}
              </span>
            </div>
            <div className="text-slate-900 opacity-70 flex flex-col text-lg font-light justify-center items-center mb-16">
              <span>
                {date} * {city}
              </span>
              <span>82 Days to Go!</span>
            </div>
          </div>
          <div className="mb-10 ">
            <NavBar />
          </div>
          <div className="flex justify-center">
            <img
              className="object-scale-down h-4/5 w-1/3 rounded-md"
              src={SepiaGrisHome}
              alt="asd"
            />
          </div>
        </div>
      )}
    </div>
  );
};
