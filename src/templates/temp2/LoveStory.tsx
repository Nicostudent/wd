import couple1 from "../../assets/images/coule13.webp";
import couple12 from "../../assets/images/coule14.webp";
import { motion } from "framer-motion";
export const LoveStory = () => {
  return (
    <div className="text-center mt-3 bg-red-200 flex flex-col justify-center items-center gap-5">
      <div className="md:w-10/12 py-5">
        <span className="font-Font-1 text-4xl text-cyan-800 pt-5 md:text-7xl  ">
          La historia de amor
        </span>
        <div className="flex justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-Font-1 w-10/12 self-center my-10 md:w-5/12 md:text-2xl "
          >
            Mary y Aldo se conocieron en una pequeña librería. Ambos alcanzaron
            el mismo libro al mismo tiempo, y así comenzó su historia. Con el
            tiempo, su amor creció entre risas, aventuras y sueños compartidos.
            Un día, bajo un cielo estrellado, Aldo le pidió a Mary que fuera su
            compañera para siempre, y ella dijo que sí con lágrimas de
            felicidad. Ahora, esperan con ansias el futuro, listos para escribir
            juntos los siguientes capítulos de su historia de amor.
          </motion.p>
        </div>
        <div className="flex md:justify-between items-center md:items-start flex-col md:flex-row md:px-20">
          <img className="size-2/4 md:w-1/5  pb-2" src={couple1} alt="" />
          <img className="md:w-2/5  md:mt-20 pb-10" src={couple12} alt="" />
        </div>
      </div>
    </div>
  );
};
