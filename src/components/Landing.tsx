import { Link as ScrollLink } from "react-scroll";
import "react-awesome-slider/dist/styles.css";
import { UseWindowSize } from "../utils/custom hooks/UseWindowSize";
import { MobileNavBar } from "./MobileNavBar";
import { Cards } from "./Cards";
import { Carousel } from "./Carousel";

export const Landing = () => {
  const isMobile = UseWindowSize();

  return (
    <div className="w-full  bg-gradient-to-t from-slate-300 to-slate-50">
      <div className="flex items-center justify-between md:justify-start gap-20 p-5 ">
        <span className="p-5 m-2 rounded-full border bg-orange-50">Logo</span>
        {isMobile ? (
          <MobileNavBar />
        ) : (
          <div>
            <ScrollLink
              className="w-fit px-4 hover:bg-opacity-30 rounded text-black"
              to="#"
              smooth={true}
              duration={500}
            >
              Inicio
            </ScrollLink>
            <ScrollLink
              className="w-fit px-4 hover:bg-opacity-30 rounded text-black"
              to="#"
              smooth={true}
              duration={500}
            >
              Precios
            </ScrollLink>
            <ScrollLink
              className="w-fit px-4 hover:bg-opacity-30 rounded text-black"
              to="#"
              smooth={true}
              duration={500}
            >
              Contacto
            </ScrollLink>
            <ScrollLink
              className="w-fit px-4 hover:bg-opacity-30 rounded text-black"
              to="#"
              smooth={true}
              duration={500}
            >
              Nosotros
            </ScrollLink>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-6xl text-center font-cormorant md:text-6xl mt-5 text-black">
            Tu Boda, Tu Historia, Tu Web
          </h1>
          <span className="font-Font-1 text-2xl text-center  mt-2 md:text-3xl text-black">
            Fácil de usar y totalmente Personalizable
          </span>
        </div>
        <ul className="list-disc text-lg px-10 flex flex-col self-center font-Kalam mt-10 text-black">
          <li>
            Elige entre una variedad de plantillas personalizables para que tu
            página refleje tu estilo único
          </li>
          <li>
            Informa a tus invitados sobre el cronograma del día, desde la
            ceremonia hasta la fiesta
          </li>
          <li>
            Incluye un mapa interactivo para que tus invitados encuentren
            fácilmente el lugar de tu boda.
          </li>
          <li>
            Facilita a tus invitados el acceso a tu lista de regalos o a tus
            preferencias de donaciones.
          </li>
        </ul>
        <div className=" flex justify-center items-center my-10">
          <div className="w-full">
            <Carousel />
          </div>
        </div>
        <div className="flex  justify-center items-center text-black">
          {!isMobile ? <Cards row /> : <Cards />}
        </div>
        <div className="text-center mt-10 text-black">
          <span className="block text-2xl font-cormorant">
            ¿Listo para crear la página de tu boda?
          </span>
          <div className="flex flex-col items-center justify-center gap-2 font-dosis   ">
            <span className="text-xl font-Font-1">Contáctanos Ahora</span>
            <a className="underline" href="https://wa.link/eqefnm">
              Whatsapp +54 3816171727
            </a>
            <span>Mail: nicorojodev.87@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
