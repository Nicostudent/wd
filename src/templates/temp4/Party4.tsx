import { useQuery } from "../../utils/custom hooks/UseQuery";
import couple3 from "../../assets/images/couple3-5.jpg";
import { EventDetails3 } from "../temp3/EventDetail3";
import { motion } from "framer-motion";

export const Party4 = () => {
  const query = useQuery();
  const d12 = query.get("p") || 0;

  return (
    <div id="Party" className="bg-orange-50 w-full h-full">
      <div className="flex justify-center">
        {!d12 ? (
          <div className="flex flex-col md:flex-row md:justify-between -translate-y-1/4 mt-32 md:mt-10">
            <div className="flex text-center flex-col items-center">
              <motion.img
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .7, delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.2 }}
                className="md:w-2/5 w-11/12 object-cover"
                src={couple3}
                alt=""
              />
              <div className="w-1/2 py-5">
                <EventDetails3
                  title={`Ceremonia`}
                  date="16:00, Capilla antigua, Av. Fray A. Alcalde 10, Guadalajara"
                  googleLink="https://maps.app.goo.gl/rPhKxkMizkhGmBr19"
                  color="text-black"
                />
              </div>
            </div>
            <div className="flex text-center flex-col items-center">
              <motion.img
                 initial={{ y: 150, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: .7, delay: 0.3 }}
                 viewport={{ once: true, amount: 0.1 }}
                 whileHover={{ scale: 1.1 }}
                className="md:w-2/5 w-11/12 object-cover"
                src={couple3}
                alt=""
              />
              <div className="w-1/2 py-5">
                <EventDetails3
                  date="17:00, Capilla antigua, Av. Fray A. Alcalde 10, Guadalajara."
                  title={`Recepción`}
                  googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
                  color="text-black"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex text-center flex-col items-center">
          <motion.img
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="md:w-2/5 w-11/12 object-cover"
            src={couple3}
            alt=""
          />
          <div className="w-1/2 py-5">
            <EventDetails3
              title={`Ceremonia`}
              date="16:00, Capilla antigua, Av. Fray A. Alcalde 10, Guadalajara"
              googleLink="https://maps.app.goo.gl/rPhKxkMizkhGmBr19"
              color="text-black"
            />
          </div>
        </div>          
        )}
      </div>
    </div>
  );
};
