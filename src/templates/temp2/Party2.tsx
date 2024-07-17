import Countdown from "../../components/Countdown";
import { EventDetails } from "../../components/EventDetails";
import { useQuery } from "../../utils/custom hooks/UseQuery";
import couple1 from "../../assets/images/coule11.webp";
import cottonFlower from "../../assets/vectorsPNG/cottonFlower.png";
import { motion } from 'framer-motion'

export const Party2 = () => {
  const query = useQuery();
  const d12 = query.get("p") || 0;
  const targetDate = new Date("2024-08-15T00:00:00");

  return (
    <div
      id="Party"
      className="h-full flex flex-col md:flex-row-reverse justify-center align-middle items-center mt-20"
    >
      <div className="md:w-10/12 flex flex-col items-center md:flex-row-reverse">
        <div className="flex flex-col md:w-1/2   mt-20 gap-5 ">
          <motion.span
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 3, delay: .125}}
            viewport={{once: true , amount: 0.5}}
           className="text-2xl md:text-3xl text-center font-Font-0 text-cyan-800">
            Detalles de la boda
          </motion.span>
          <motion.span
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 3, delay: 0.25}}
            viewport={{once: true, amount: 0.5}}
           className="text-xl text-center md:text-3xl md:w-2/3 mb-10 font-Font-1 w-10/12 self-center">
            Estamos encantados de invitarlos a la celebración de nuestra boda.
            Será íntima, y llena de amor. Prepárate para un día de alegría y
            diversión.
          </motion.span>
          <div className="flex justify-evenly gap-4 w-full mt-20 md:mt-32 ">
            {!d12 ? (
              <div className="relative flex justify-evenly gap-4 w-full ">
                <EventDetails
                  title="Ceremonia"
                  day="3 de Agosto de 2024"
                  hour="16.15hs"
                  googleLink="https://maps.app.goo.gl/rPhKxkMizkhGmBr19"
                  color="text-cyan-800"
                />
                <div>
                  <img
                    className="w-3/12 absolute inset-x-0 -top-32 md:-top-40 m-auto"
                    src={cottonFlower}
                    alt=""
                  />
                </div>
                <EventDetails
                  title="Fiesta"
                  day="3 de Agosto de 2024"
                  hour="18hs"
                  googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
                  color="text-cyan-800"
                />
              </div>
            ) : (
              <EventDetails
                title="Fiesta"
                day="3 de Agosto de 2024"
                hour="21:30hs"
                googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
                color="text-cyan-800"
              />
            )}
          </div>
          <div className="font-Font-3 text-xs  md:text-base flex justify-center">
            <span className="w-10/12 text-center">
              Haz click en el icono para ver la direccion en el mapa
            </span>
          </div>
          <div className="self-center my-10">
            <Countdown targetDate={targetDate} />
          </div>
        </div>
        <div className="md:w-6/12">
          <img className="object-cover" src={couple1} alt="" />
        </div>
      </div>
    </div>
  );
};
