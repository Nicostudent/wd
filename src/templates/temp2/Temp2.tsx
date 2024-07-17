import { RegistryForm } from "../../components/RegistryForm";
import { useQuery } from "../../utils/custom hooks/UseQuery";
import { Present2 } from "./Present2";
import { Party2 } from "./Party2";
import { UseWindowSize } from "../../utils/custom hooks/UseWindowSize";
import { MobileNavBar } from "../../components/MobileNavBar";
import { WebNavBar } from "../../components/WebNavBar";
import { Home2 } from "./Home2";
import { ScrollLinkButton } from "../../components/ScrollLinkButton";
import { LoveStory } from "./LoveStory";
import { motion } from 'framer-motion'

export const Temp2 = () => {
  const query = useQuery();
  const d12 = query.get("p") || 0;
  const isMobile = UseWindowSize();

  return (
    <div className="bg-orange-50 bg-fixed min-h-screen h-full relative max-w-max">
      <div className=" flex justify-center w-full bg-orange-50 sticky top-0 z-50 ">
        <div
          className={`flex justify-between p-6 px-4 bg-orange-50 items-center align-middle  w-10/12`}
        >
          <span className="self-center text-center justify-center font-Font-1 text-lg md:text-2xl text-cyan-800">
            Mary & Aldo
          </span>
          {isMobile ? (
            <MobileNavBar />
          ) : (
            <div className="flex w-10/12 justify-between ">
              <WebNavBar />
              <div className="text-cyan-800 border-cyan-800 ">
                <ScrollLinkButton to="Registry" />
              </div>
            </div>
          )}
        </div>
      </div>
      <Home2 />
      <div className="flex justify-center align-middle items-center mt-72 lg:mt-20">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.25 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl text-center md:text-7xl font-Font-0 w-1/2 text-cyan-700"
      >
        ¡Estamos ansiosos por rodearnos de nuestra gente favorita!
      </motion.span>
    </div>
      <div id="party" className="flex justify-center">
        <Party2 />
      </div>
      {/* La historia de amor */}
          <LoveStory/>
      {/* Confirmar asistencia */}

      <RegistryForm party={!!d12} />
      {/* gift */}
      <Present2
        cbu="0000031000161187175"
        alias="May&Aldo"
        titular="Aldo Mamani"
        cuil="20-32333322-1"
        aditionalNote="Mercado Pago"
      />
      <div className="bg-red-200 flex flex-col text-center gap-5 pt-10">
        <span className="text-cyan-800 font-Font-1 text-2xl bg-red-200 ">
          ¿Preguntas?
        </span>
        <span>Laama o envia mensaje</span>
        <div className="pb-10 flex justify-center">
          <span className="w-1/3">May: +549381555555</span>
          <span className="w-1/3">Aldo: +549381888888</span>
        </div>
      </div>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 2, delay: 0.25}}
      viewport={{once: false, amount: 0.2}}
      className="bg-red-100 flex flex-col justify-center gap-2 text-center font-lg font-Font-1 pt-2 ">
        <span>Términos y Condiciones</span>
        <span>Política de Privacidad</span>
        <span>© Creado por... </span>
      </motion.div>
    </div>
  );
};
