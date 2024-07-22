import couple31 from "../../assets/images/couple3-3.jpg";
import couple32 from "../../assets/images/couple3-4.jpg";
import { motion } from "framer-motion";

export const LoveStory4 = () => {
  return (
    <div className="w-full h-full lg:h-screen bg-orange-50 ">
      <div className="flex justify-end">
        <div className="lg:w-10/12 w-full">
          <div className="w-full flex flex-col lg:flex-row ">
            <div className="lg:w-1/2 w-full px-2 py-5 lg:py-0 ">
              <div className="lg:w-1/2 flex flex-col lg:pt-20  gap-5 lg:pl-10">
                <span className="text-7xl font-zilla">La historia de amor</span>
                <span>
                  {" "}
                  Nos conocimos un día lluvioso en el mercado local. Hablando y
                  paseando, nos dimos cuenta de que no queríamos seguir caminos
                  separados. Sin darnos cuenta, el tiempo pasó.
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 bg-orangt4100 flex justify-center">
              <motion.img
                initial={{ x: 250, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:w-2/3 pt-20"
                src={couple31}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex lg:flex-row flex-col">
            <div className="lg:w-1/2  w-full flex lg:py-10">
              <motion.img
                initial={{ x: -250, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:w-2/3"
                src={couple32}
                alt=""
              />
            </div>
            <div className="lg:w-1/2 bg-orangt4100 flex justify-center">
              <div className="lg:w-1/2 flex flex-col justify-center items-center gap-10  ">
                <span className="w-10/12 pt-10 lg:pt-0 ">
                  {" "}
                  Nos conocimos un día lluvioso en el mercado local. Hablando y
                  paseando, nos dimos cuenta de que no queríamos seguir caminos
                  separados. Sin darnos cuenta, el tiempo pasó.
                </span>
                <div className="w-full bg-orangt450  lg:bg-orangt4100  flex justify-center">
                  <span className="w-10/12 py-10 lg:py-0">
                    {" "}
                    Nos conocimos un día lluvioso en el mercado local. Hablando
                    y paseando, nos dimos cuenta de que no queríamos seguir
                    caminos separados. Sin darnos cuenta, el tiempo pasó.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* */
