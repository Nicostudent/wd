// import { UseWindowSize } from "../../utils/custom hooks/UseWindowSize";
import Countdown from "../../components/Countdown";
import { motion } from 'framer-motion';
export const Home4 = () => {
//   const isMobile = UseWindowSize();
  const targetDate = new Date("2024-08-15T00:00:00");

  return (
    <div className="h-screen bg-leaf bg-white w-full md:flex md:flex-col md:justify-center" id="home">
      <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{ duration: 3.5 }}
      className="flex flex-col justify-center items-center font-Dancing  mt-20 ">
        <Countdown targetDate={targetDate} />
        <div className="text-6xl flex justify-center flex-col md:text-9xl font-cormorant ">
          <span>Abigail</span>
          <span>& René</span>
        </div>
      </motion.div>
      <motion.div 
      initial={{y:100, opacity: 0}}
      animate={{y:0 , opacity: 1}}
      transition={{ duration: 1.5, delay: 0.7 }}

      className="w-full flex justify-center  mt-20">
        <div className="w-11/12  flex justify-center text-center py-4 bg-orangt450 rounded-full text-sm
        md:w-1/4 
        ">
          <div className=" w-1/2 flex flex-col ">
            <span>Viernes </span>
            <span>Oct. 20-22, 2025</span>
          </div>
          <span className="border-r-2  border-black md:h-12"></span>
          <div className="w-1/2 flex flex-col">
            <span>Av. Fray A. Alcalde</span>
            <span>10, Argentina</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
