import couple1 from "../../assets/images/coule12.webp";
import biciCouple1 from "../../assets/images/biciCouple1.jpg";
import leaf from "../../assets/images/leaf.jpg";
import { UseWindowSize } from "../../utils/custom hooks/UseWindowSize";
import { ScrollLinkButton } from "../../components/ScrollLinkButton";
import { motion } from "framer-motion";

export const Home2 = () => {
  const isMobile = UseWindowSize();
  const initialY = isMobile ? "100%" : "5%";
  const animateY = isMobile ? "70%" : "-30%";
  const transformClass = isMobile
    ? "absolute top-1/3 w-3/6 md:h-2/3 md:object-contain"
    : "absolute top-1/3 right-0 w-2/5";

  return (
    <div className="h-screen bg-orange-50 flex justify-center" id="home">
      <div className="lg:w-10/12 w-full">
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} h-full`}>
          <div className="lg:w-7/12 relative">
            <img className="h-full w-full object-cover" src={leaf} alt="" />

            <motion.img
              initial={{ opacity: 0, y: initialY, x: "50%" }}
              animate={{ opacity: 1, y: animateY, x: "50%" }}
              transition={{ duration: 1.3, delay: 0.7 }}
              className={transformClass}
              src={couple1}
              alt=""
            />
            <div
              className={`absolute ${
                isMobile ? "inset-x-0 top-10 font-bold" : "top-32 left-32 gap-20"
              } m-auto flex flex-col justify-center items-center gap-10 font-Font-1 text-white`}
            >
              <span className="text-5xl md:text-8xl md:w-80">Mary & Aldo</span>
              <span className="text-3xl md:text-4xl">¡Nos Casamos!</span>
              <span className="text-2xl md:text-3xl">
                Sábado, 22 de Abril, 2035
              </span>
              {!isMobile && <ScrollLinkButton to="Registry" />}
            </div>
          </div>

          <div className="lg:w-5/12 h-full">
            <img
              className="h-full w-full object-cover"
              src={biciCouple1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
