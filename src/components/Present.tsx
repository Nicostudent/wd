import present from '../assets/gifs/present.gif'
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
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center"
      id="Presents"
    >
      <img className='w-1/6' src={present} alt="" />
      <span className=' text-4xl font-Dosis text-center  my-10 w-3/5'>
        Nada nos hace más felices que compartas con nosotros este gran momento.
        Si querés regalarnos algo, podés colaborar con nuestra luna de miel.
      </span>
      <div className="bg-amber-100 bg-opacity-50 border-2 border-black flex flex-col
       w-2/3 justify-center items-center rounded-md h-52 mb-20 md:mb-0 ">
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
    </div>
  );
};
