import { UseWindowSize } from "../../utils/custom hooks/UseWindowSize";
import couple3 from "../../assets/images/couple3-1.jpg";
import { ScrollLinkButton } from "../../components/ScrollLinkButton";
export const Home3 = () => {
  const isMobile = UseWindowSize();

  return (
    <div className="md:h-screen  bg-white md:w-11/12 md:relative " id="home">
      <div className="flex flex-col ml-4 font-cormorant gap-5 mt-24  ">
        <span className="text-3xl md:text-5xl">¡Nos Casamos!</span>
        <span className="text-5xl md:text-9xl ">ALMA & OMAR</span>
      </div>
      <div className={`flex  flex-row ${isMobile && " flex-col"} font-zilla font-extralight md:mt-20`}>
        <div className="flex flex-col ml-4 gap-1 md:w-1/3 ">
          <span className="text-3xl md:text-2xl">
          Viernes, 20 de oct de 2023
          </span>
          <span className="text-3xl md:text-2xl">Capilla antigua, Guadalajara</span>
          <div className="px-4 p-2 md:px-14 md:p-6 w-fit border-black my-10">
          <ScrollLinkButton to="Registry" color="p-8 px-8 md:text-xl border-black text-black hover:bg-orange-300 " />
          </div>
        </div>
        <div className="md:w-2/3 z-10">
        <img className=" md:absolute md:-bottom-[10%] md:size-3/5 md:object-cover md:h-2/3 md:ml-20 mb-5 "  src={couple3} alt="" />
        </div>
      </div>
    </div>
  );
};
