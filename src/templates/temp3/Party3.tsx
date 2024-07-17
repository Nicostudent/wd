import { useQuery } from "../../utils/custom hooks/UseQuery";
import couple3 from "../../assets/images/couple3-5.jpg"
import { EventDetails3 } from "./EventDetail3";

export const Party3 = () => {
  const query = useQuery();
  const d12 = query.get("p") || 0;

  return (
    <div
      id="Party"
      className="relative md:h-screen bg-slate-100 flex flex-col justify-center align-middle items-center md:mt-20 w-11/12"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col  md:mt-20 mt-10 gap-5 ">
          <span        
            className="text-4xl md:text-start  text-center font-cormorant px-4 md:px-0 md:text-7xl md:w-2/5"
          >
            Celebrando nuestro amor con quienes amamos
          </span>
          <div className="flex flex-col md:flex-row md:mt-10">
            <div className="flex justify-center md:w-4/5 md:justify-start">
              <img className="md:w-3/4  object-cover" src={couple3} alt="" />
            </div>
            <div className="w-full mt-4 ml-4 ">
              {!d12 ? (
                <div className=" flex flex-col  gap-5 md:justify-evenly md:h-full">
                  <EventDetails3
                    title={`01. \u00A0\u00A0Ceremonia`}
                    date="16:00, Capilla antigua, Av. Fray A. Alcalde 10, Guadalajara"
                    googleLink="https://maps.app.goo.gl/rPhKxkMizkhGmBr19"
                    color="text-black"
                  />

                  <EventDetails3
                    date="17:00, Capilla antigua, Av. Fray A. Alcalde 10, Guadalajara."
                    title={`02. \u00A0\u00A0Recepción`}
                    googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
                    color="text-black"
                  />
                </div>
              ) : (
                <EventDetails3
                  date="17:00, Capilla antigua, Av. Fray A. Alcalde 10, Guadalajara"
                  title={`01. \u00A0\u00A0Ceremonia`}
                  googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
                  color="text-black"
                />
              )}
            </div>
          </div>

          <div className="font-Font-3 text-xs md:absolute md:inset-x-0 md:bottom-0 md:text-base flex justify-center">
            <span className="w-10/12 text-center">
              Haz click para ver la direccion en el mapa
            </span>
          </div>
        </div>   
      </div>
    </div>
  );
};
