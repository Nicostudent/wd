import React from "react";
import thanks from "../assets/gifs/thnyou_wh.gif";
import GastoniArcoDelTriunfo from "../assets/images/GastoniArcoDelTriunfo.jpg";
import flowers from "../assets/vectorsPNG/flowers.png";
type PresentProps = {
  cbu?: string;
  alias?: string;
  titular?: string;
  cuil?: string;
  aditionalNote?: string;
  children?: React.ReactNode;
};

export const Present = ({
  cbu,
  alias,
  titular,
  cuil,
  aditionalNote,
  children,
}: PresentProps) => {
  return (
    <div
      className=" w-full flex flex-col justify-center items-center relative"
      id="Presents"
    >
      <div className=" text-3xl font-times text-center my-10 w-4/5 md:w-2/5 ">
        <img
          className="top-0   bottom-0 right-96 -rotate-12  md:absolute   pl-14 overflow-hidden w-30"
          src={flowers}
          alt="flowers"
        />
        <span>
          NADA NOS HACE MÁS FELICES QUE COMPARTAS CON NOSOTROS ESTE GRAN
          MOMENTO. SI QUERÉS REGALARNOS ALGO, PODES HACERLO EN ESTA CUENTA O EN
          EL SALÓN, EN DONDE HABRÁ UN BUZÓN.
        </span>
      </div>
      <div className="w-2/6 md:w-1/6 mb-10 ">{children}</div>

      <div
        className="bg-amber-100 md:w-fit md:px-20 md:gap-2 bg-opacity-50 border-2 border-black flex flex-col
       w-10/12 justify-center pl-2 rounded-md h-52 mb-5"
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
      <img
        className={`w-11/12 rounded-3xl pb-2 md:w-1/3 mb-10`}
        src={GastoniArcoDelTriunfo}
        alt=""
      />
      <div className="flex justify-center items-center">
        <img className="w-3/5" src={thanks} alt="" />
      </div>
    </div>
  );
};
