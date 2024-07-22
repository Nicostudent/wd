import { RegistryForm } from "../../components/RegistryForm";
import { useQuery } from "../../utils/custom hooks/UseQuery";
import { UseWindowSize } from "../../utils/custom hooks/UseWindowSize";
import { MobileNavBar } from "../../components/MobileNavBar";
import { WebNavBar } from "../../components/WebNavBar";
import { ScrollLinkButton } from "../../components/ScrollLinkButton";
import { motion } from "framer-motion";
import { Present3 } from "../temp3/Present3";
import { Home4 } from "./Home4";
import { LoveStory4 } from "./LoveStory4";
import { Party4 } from "./Party4";
import { BrideAndGroom } from "../../utils/icons/BrideAndGroom";

export const Temp4 = () => {
  const query = useQuery();
  const d12 = query.get("p") || 0;
  const isMobile = UseWindowSize();

  return (
    <div className="bg-white bg-fixed min-h-screen h-full relative max-w-max flex justify-center flex-col items-center">
      <div className=" flex justify-center w-full bg-orange-100 sticky top-0 z-50 ">
        <div
          className={`flex justify-between p-6 px-4 bg-orange-100 items-center align-middle  w-10/12`}
        >
          <span className="self-center text-center justify-center font-Font-1 text-lg md:text-2xl">
            A&R
          </span>
          {isMobile ? (
            <MobileNavBar es />
          ) : (
            <div className="flex w-10/12 justify-between ">
              <WebNavBar
                es
                hoverBg="hover:bg-white"
                hoverTxt="hover:text-orange-300"
                jusfity="justify-end pr-2"
              />
              <div className="text-cyan-800 border-cyan-800 ">
                <ScrollLinkButton
                  to="Registry"
                  color="border-black text-black hover:bg-orange-300 "
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Home4 />
      <div
        className="bg-ambert4700
       text-white text-start
         py-32 font-cormorant px-4 md:w-full md:flex md:flex-row md:justify-around md:gap-10 md:items-center "
      >
        <div className="flex flex-col w-10/12 mt-10 md:mt-0 md:w-fit">
          <div className="flex flex-col">
          <span className="text-4xl md:text-6xl font-bold">Nuestra boda</span>
          <span className="text-4xl md:text-6xl font-bold">se acerca</span>
          </div>
          <span className="text-xl md:text-3xl md:text-slate-100 mt-5 ">
            Viernes, Oct. 20, 2025
          </span>
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: .7, delay: 0.3 }}
           viewport={{ once: true, amount: 0.1 }}
        className="w-1/3 md:w-1/12 my-10">
          <BrideAndGroom />
        </motion.div>
        <div className="md:w-1/4 flex flex-col gap-5 ">
          <span className="text-xl md:text-2xl font-bold">
            Estamos Encantados de invitarte a Celebrar nuestro matrimonio
          </span>
          <p className="w-10/12 text-start mb-24 md:mb-0 md:text-xl">
          Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.
          </p>
        </div>
      </div>
      <div id="party" className="flex justify-center bg-orangt450">
        <Party4 />
      </div>
      {/* La historia de amor */}
      <LoveStory4 />
      {/* Confirmar asistencia */}

      <RegistryForm party={!!d12} bgColor="bg-ambert4700 mb-0 text-white" />
      <div className="w-full h-full font-zilla py-10 bg-orangt450">
        <div className="flex  justify-center items-center ">
          <div className="md:w-1/2 w-full flex flex-col justify-center  items-center">
            <span className=" text-2xl md:text-4xl ">Colores de la boda</span>
            <p className="w-2/3 md:text-2xl font-cormorant">
            Nos encantaría que se unieran a nosotros en la celebración de nuestro matrimonio utilizando los colores que hemos elegido para este día tan especial. Los colores que hemos seleccionado para la boda son una combinación de tonos elegantes y sofisticados que reflejan nuestro estilo y la esencia de nuestra unión:
            </p>
            <div className="flex justify-center w-10/12 mt-10">
              <span className="w-8 h-8 bg-orangt4100 border-2 rounded-full"></span>
              <span className="w-8 h-8 bg-ambert4700 border-2 rounded-full"></span>
              <span className="w-8 h-8 bg-pink-400 border-2 rounded-full"></span>{" "}
              <span className="w-8 h-8 bg-green-900 border-2 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* gift */}
      <Present3
        cbu="0000031000161187"
        alias="Abigail&Rene"
        titular="Rene"
        cuil="20-32333322-1"
        aditionalNote="BBVA"
        bgColor="bg-ambert4700"
        txtColor="text-white"
      />

      <div className="bg-orangt450 flex flex-col text-start gap-5 pl-5 pt-10 w-full">
        <div className="flex justify-between">
          <span className="font-Font-1 text-4xl   ">A&R</span>
          <span className="text-2xl font-cormorant">Llámanos</span>
          <span></span>
        </div>
        <div className="text-2xl flex justify-center items-center flex-col gap-2 font-Font-1">
          <span className="">Abigail: +52-1-33-12345678</span>
          <span className="">Rene: +52-1-33-12345678</span>
        </div>
      </div>
      <div className="bg-orangt450 w-full ">
        <motion.div
          className="flex flex-col md:flex-row justify-center md:gap-24 text-center font-lg font-Font-1 pt-10 "
          initial={{ opacity: 0.1 }}
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
