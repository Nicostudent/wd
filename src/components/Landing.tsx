import { Link as ScrollLink } from "react-scroll";

import img1 from "../assets/images/landing/img1.jpg";
import img2 from "../assets/images/landing/img2.jpg";
import img3 from "../assets/images/landing/img3.jpg";

export const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-blue-900 to-purple-500">
      <div className="flex items-center justify-start gap-20 p-5">
        <span className="p-5 m-2 rounded-full border bg-orange-50">Logo</span>
        <div>
          <ScrollLink className="w-fit px-4 hover:bg-opacity-30 rounded text-white" to="#" smooth={true} duration={500}>Inicio</ScrollLink>
          <ScrollLink className="w-fit px-4 hover:bg-opacity-30 rounded text-white" to="#" smooth={true} duration={500}>Precios</ScrollLink>
          <ScrollLink className="w-fit px-4 hover:bg-opacity-30 rounded text-white" to="#" smooth={true} duration={500}>Contacto</ScrollLink>
          <ScrollLink className="w-fit px-4 hover:bg-opacity-30 rounded text-white" to="#" smooth={true} duration={500}>Nosotros</ScrollLink>
        </div>
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-cormorant text-6xl mt-5 text-white">
            Tu Boda, Tu Historia, Tu Web
          </h1>
          <span className="font-Font-1 text-3xl text-white">
            Fácil de usar y Totalmente Personalizable
          </span>
        </div>
        <ul className="list-disc flex flex-col self-center font-Kalam mt-10 text-white">
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
        <div className="flex justify-center gap-5 mt-10 w-full">
          <img className="w-1/6 object-contain border rounded-md h-fit self-center" src={img2} alt="Image 2" />
          <img className="w-1/3 object-contain border rounded-md h-fit self-center" src={img1} alt="Image 1" />
          <img className="w-1/6 object-contain border rounded-md h-fit self-center" src={img3} alt="Image 3" />
        </div>
        <div className="flex justify-center gap-10 my-5 mb-10">
          <button className="border-2 p-2 items-center rounded-full text-white">
            {"<"}
          </button>
          <button className="border-2 p-2 items-center rounded-full text-white">{">"}</button>
        </div>
        <div className="flex justify-center gap-20 text-white">
          <div className="border-2 rounded-lg p-4">
            <span>Plan Básico</span>
            <ul className="list-disc pl-2">
              <li>Precio: $50/mes</li>
              <li>Diseño Personalizado</li>
              <li>Gestión de Invitados</li>
              <li>Galería de Fotos</li>
              <li>Agenda del Evento</li>
              <li>Mapa de Ubicación</li>
            </ul>
          </div>
          <div className="border-2 rounded-lg p-4">
            <span>Plan Estándar</span>
            <ul className="list-disc pl-2">
              <li>Precio: $75/mes</li>
              <li>Todo el plan básico</li>
              <li>Dominio Personalizado</li>
              <li>Registro de Regalos</li>
              <li>Soporte por Email</li>
              <li>Plantillas Exclusivas</li>
            </ul>
          </div>
          <div className="border-2 rounded-lg p-4">
            <span>Plan Premium</span>
            <ul className="list-disc pl-2">
              <li>Precio: $100/mes</li>
              <li>Todo el plan Estándar</li>
              <li>Soporte Prioritario 24/7</li>
              <li>Diseño Personalizado Avanzado</li>
              <li>Integración con Redes Sociales</li>
              <li>Optimización SEO</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-white">
          <span className="block text-2xl">
            ¿Listo para crear la página de tu boda?
          </span>
          <span className="block text-xl mt-2">Contáctanos Ahora</span>
        </div>
      </div>
    </div>
  );
};
