import couple31 from "../../assets/images/couple3-3.jpg";
import couple32 from "../../assets/images/couple3-4.jpg";
import couple33 from "../../assets/images/couple3-2.jpg";

export const LoveStory3 = () => {

  return (
    <div className="h-full w-11/12">
      <div
        className="flex font-cormorant flex-col  text-start justify-center md:flex-row h-1/2 mt-20 w-10/12"
      >
        <div className="md:w-1/2 flex flex-col ">
          <span className="text-5xl md:text-4xl">No solo es una </span>
          <span className="text-5xl md:text-4xl">historia más de amor</span>
        </div>

        <div className="md:w-1/2">
          <p className="my-5 md:my-5 text-2xl ">
            Alma y Omar se conocieron en una pequeña librería. Ambos alcanzaron
            el mismo libro al mismo tiempo, y así comenzó su historia. Con el
            tiempo, su amor creció entre risas, aventuras y sueños compartidos.
            Un día, bajo un cielo estrellado, Aldo le pidió a Mary que fuera su
            compañera para siempre, y ella dijo que sí con lágrimas de
            felicidad. Ahora, esperan con ansias el futuro, listos para escribir
            juntos los siguientes capítulos de su historia de amor.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-10 gap-1 ">
        <img className="md:w-1/3 " src={couple31} alt="" />
        <img className="md:w-1/3 " src={couple32} alt="" />
        <img className="md:w-1/3 " src={couple33} alt="" />
      </div>
    </div>
  );
};
