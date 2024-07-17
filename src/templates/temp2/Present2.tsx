import React from "react";
import { motion } from 'framer-motion'
type PresentProps = {
  cbu?: string;
  alias?: string;
  titular?: string;
  cuil?: string;
  aditionalNote?: string;
  children?: React.ReactNode;
};

export const Present2 = ({
  cbu,
  alias,
  titular,
  cuil,
  aditionalNote,
}: PresentProps) => {
  return (
    <div
      className=" bg-leaf bg-center bg-no-repeat bg-cover text-white w-full flex flex-col justify-center items-center relative"
      id="Presents"
    >
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 2, delay: 0.25}}
      viewport={{once: true, amount: 0.3}}
      className="flex flex-col gap-5 font-times text-center mt-10 w-4/5 md:w-2/5 ">    
        <span className="text-4xl ">¡Deseamos verte!</span>
        <span className="text-2xl font-extralight font-Font-1">
          La celebración no sería lo mismo sin ti. Haznos saber si planeas
          asistir a través del enlace de confirmación a continuación, y anota
          cualquier restricción dietética o petición especial.
        </span>
        <span className="italic">Reserva antes del 1 de marzo</span>
      </motion.div>

      <div
        className="bg-amber-50 md:w-fit md:px-20 md:gap-2 bg-opacity-50 border-2 border-black/50 flex flex-col mt-10 w-10/12 justify-center pl-2 rounded-md h-52 mb-5 "
      >
        <span>
          <b>CBU:</b> {cbu}{" "}
        </span>
        <span>
          <b>Alias</b> {alias}{" "}
        </span>
        <span>
          <b>Nombre del Titular</b> {titular}{" "}
        </span>
        <span>
          <b>Cuil</b> {cuil}{" "}
        </span>
        <span className=" italic">{aditionalNote}</span>
      </div>    
      <div className="flex justify-center items-center p-10">
      </div>
    </div>
  );
};
