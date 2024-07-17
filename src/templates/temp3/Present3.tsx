import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PresentProps = {
  cbu?: string;
  alias?: string;
  titular?: string;
  cuil?: string;
  aditionalNote?: string;
  children?: React.ReactNode;
  bgColor?: string;
  txtColor?: string;
};

export const Present3 = ({
  cbu,
  alias,
  titular,
  cuil,
  aditionalNote,
  bgColor,
  txtColor,
}: PresentProps) => {
  const [modal, setModal] = useState(false);

  const modalVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={` ${
        bgColor ? bgColor : "bg-leaf bg-center bg-no-repeat bg-cover"
      }  ${
        txtColor ? txtColor : "text-white"
      } w-full flex flex-col justify-center items-center relative`}
      id="Presents"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.25 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-5 font-times text-center mt-10 w-4/5 md:w-2/5 "
      >
        <span className="text-2xl font-extralight font-Font-1">
          NADA NOS HACE MÁS FELICES QUE COMPARTAS CON NOSOTROS ESTE GRAN
          MOMENTO. SI QUERÉS REGALARNOS ALGO, PODES HACERLO EN ESTA CUENTA O EN
          EL SALÓN, EN DONDE HABRÁ UN BUZÓN
        </span>
      </motion.div>

      <button
        className="border rounded-full p-8 m-5"
        onClick={() => setModal(!modal)}
      >
        CONTRIBUYE
      </button>

      <AnimatePresence>
        {modal && (
          <motion.div
            className="bg-amber-50 md:w-fit md:px-20 md:gap-2 bg-opacity-50 border-2 border-black/50 flex flex-col mt-10 w-10/12 justify-center pl-2 rounded-md h-52 mb-5"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ duration: 0.7 }}
          >
            <span>
              <b>CBU:</b> {cbu}
            </span>
            <span>
              <b>Alias:</b> {alias}
            </span>
            <span>
              <b>Nombre del Titular:</b> {titular}
            </span>
            <span>
              <b>Cuil:</b> {cuil}
            </span>
            <span className="italic">{aditionalNote}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
