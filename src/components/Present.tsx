import { useState } from 'react';
import present from '../assets/gifs/present.gif'
import GastoniArcoDelTriunfo from '../assets/images/GastoniArcoDelTriunfo.jpg'
type PresentProps = {
  cbu?: string;
  alias?: string;
  titular?: string;
  cuil?: string;
  aditionalNote?: string;
};

export const Present = ({
  
  cbu,
  alias,
  titular,
  cuil,
  aditionalNote,
}: PresentProps) => {
  const [sepia, setSepia]=useState(false);

  return (

    <div
      className=" w-full flex flex-col justify-center items-center"
      id="Presents"
    >
      <img className='w-2/6 md:w-1/6' src={present} alt="" />
      <span className=' text-3xl font-Dosis text-center  my-10 w-4/5 md:w-1/3'>
        Nada nos hace más felices que compartas con nosotros este gran momento.
        Si querés regalarnos algo, podés colaborar con nuestra luna de miel.
      </span>
      <div className="bg-amber-100 md:w-fit md:px-20 md:gap-2 bg-opacity-50 border-2 border-black flex flex-col
       w-11/12 justify-center pl-2 rounded-md h-52 mb-5">
        <span >
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
    onClick={() => setSepia(!sepia)}
     className={`w-11/12 rounded-3xl ${!sepia ? "sepia-[.75] ": "" } pb-2 md:w-1/3 mb-10`}
     src={GastoniArcoDelTriunfo} alt="" />
    </div>
  );
};
