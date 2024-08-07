import { Home } from "../../components/Home";
import { EventDetails } from "../../components/EventDetails";
import { Church } from "../../utils/icons/Church";
import { BrideAndGroom } from "../../utils/icons/BrideAndGroom";
import { RegistryForm } from "../../components/RegistryForm";
import vectorGifts from "../../assets/vectorsPNG/vectorGifts.png"
import { useQuery } from "../../utils/custom hooks/UseQuery";
import { Present } from "../../components/Present";

export const Temp1 = () => {
  const query = useQuery();
  const d12 = query.get("p") || 0;

  return (
    <div className="bg-marmolado bg-cover bg-center bg-fixed min-h-screen">
      <Home />
      <div
        id="Party"
        className="h-full w-full flex flex-col justify-center align-middle items-center mt-20"
      >
        <div className="flex flex-col justify-evenly h-full w-full mt-16">
          <span className="text-2xl text-center md:text-7xl mb-10 font-Font-0 ">
            Step by Step
          </span>
          <div className="flex justify-evenly gap-4 w-full mt-20 md:justify-center md:gap-60">
            {!d12 ? (
              <div className="flex justify-evenly gap-4 w-full mt-20 md:justify-center md:gap-60">

              <EventDetails
                title="Ceremonia"
                day="3 de Agosto de 2024"
                hour="16.15hs"
                children={<Church />}
                googleLink="https://maps.app.goo.gl/rPhKxkMizkhGmBr19"
                />
              <EventDetails
              title="Fiesta"
              day="3 de Agosto de 2024"
              hour="18hs"
              children={<BrideAndGroom />}
              googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
              />
              </div>
            ):(

              <EventDetails
              title="Fiesta"
              day="3 de Agosto de 2024"
              hour="21:30hs"
              children={<BrideAndGroom />}
              googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
              />
            )}
          </div>
          <div className="font-Font-3 flex justify-center items-center flex-col text-xl">
            <span>Dress Code:</span>
            <span>Formal</span>
          </div>
        </div>
      </div>
      {/* Confirmar asistencia */}
      <RegistryForm party={!!d12} />
      {/* gift */}
      <Present
        cbu="0000003100021611871757"
        alias="GASTONYSOLE"
        titular="Gaston Mauvecin"
        cuil="20-32459499-0"
        children={<img src={vectorGifts} alt="" />}
        aditionalNote="Mercado Pago"
      />
    </div>
  );
};
