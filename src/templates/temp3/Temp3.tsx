import { RegistryForm } from "../../components/RegistryForm";
import { useQuery } from "../../utils/custom hooks/UseQuery";
import { UseWindowSize } from "../../utils/custom hooks/UseWindowSize";
import { MobileNavBar } from "../../components/MobileNavBar";
import { WebNavBar } from "../../components/WebNavBar";
import { ScrollLinkButton } from "../../components/ScrollLinkButton";
import { motion } from "framer-motion";
import { Home3 } from "./Home3";
import { Party3 } from "./Party3";
import { LoveStory3 } from "./LoveStory3";
import { Present3 } from "./Present3";

export const Temp3 = () => {
  const query = useQuery();
  const d12 = query.get("p") || 0;
  const isMobile = UseWindowSize();

  return (
    <div className="bg-white bg-fixed min-h-screen h-full relative max-w-max flex justify-center flex-col items-center">
      <div className=" flex justify-center w-full bg-white sticky top-0 z-50 ">
        <div
          className={`flex justify-between p-6 px-4 bg-white items-center align-middle  w-10/12`}
        >
          <span className="self-center text-center justify-center font-Font-1 text-lg md:text-2xl">
            A&O
          </span>
          {isMobile ? (
            <MobileNavBar  es/>
          ) : (
            <div className="flex w-10/12 justify-between ">
              <WebNavBar es hoverBg="hover:bg-white" hoverTxt="hover:text-orange-300" jusfity="justify-end pr-2"  />
              <div className="text-cyan-800 border-cyan-800 ">
                <ScrollLinkButton to="Registry" color="border-black text-black hover:bg-orange-300 " />
              </div>
            </div>
          )}
        </div>
      </div>
      <Home3 />
      <div id="party" className="flex justify-center bg-slate-100">
        <Party3 />
      </div>
      {/* La historia de amor */}
      <LoveStory3 />
      {/* Confirmar asistencia */}

      <RegistryForm party={!!d12} bgColor="bg-slate-100" />
      {/* gift */}
      <Present3
        cbu="0000031000161187175"
        alias="May&Aldo"
        titular="Aldo Mamani"
        cuil="20-32333322-1"
        aditionalNote="Mercado Pago"
        bgColor="bg-white"
        txtColor="text-black"
      />

      <div className="bg-slate-100 flex flex-col text-center gap-5 pt-10 w-full">
        <span className="text-cyan-800 font-Font-1 text-2xl  ">
          ¿Preguntas?
        </span>
        <span className="text-2xl font-cormorant">Llámanos</span>
        <div className="text-2xl flex justify-center flex-col gap-2 font-Font-1">
          <span className="">Alma: +52-1-33-12345678</span>
          <span className="">Omar: +52-1-33-12345678</span>
        </div>
      </div>
      <div  className="bg-slate-100 w-full ">
        <motion.div    
        className="flex flex-col justify-center gap-2 text-center font-lg font-Font-1 pt-10 "  
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.25 }}
          viewport={{ once: false, amount: 0.2 }}
         
        >
          <span>Términos y Condiciones</span>
          <span>Política de Privacidad</span>
          <span>© Creado por... </span>
        </motion.div>
      </div>
    </div>
  );
};
