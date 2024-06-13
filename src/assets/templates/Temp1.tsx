import { Home } from "../../components/Home";
import { EventDetails } from "../../components/EventDetails";
import { Church } from "../../utils/icons/Church";
import { BrideAndGroom } from "../../utils/icons/BrideAndGroom";
import { RegistryForm } from "../../components/RegistryForm";
import { Present } from "../../components/Present";
import { Gifts } from "../../utils/icons/Gifts";

export const Temp1 = () => {
  return (
    <div>
      <Home />
      <div
        id="Party"
        className="h-full w-full flex flex-col justify-center align-middle items-center mt-20"
      >
        <div className="flex flex-col justify-evenly h-full w-full">
          <span className="text-2xl text-center md:text-7xl mb-10 font-Font-1 ">
            Step by Step
          </span>
          <div className="flex justify-evenly gap-4 w-full mt-20 md:justify-center md:gap-60">
            <EventDetails
              title="Ceremonia"
              day="5 de Agosto de 2024"
              hour="16.15hs"
              children={<Church />}
              googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
            />
            <EventDetails
              title="Fiesta"
              day="5 de Agosto de 2024"
              hour="17.30hs"
              children={<BrideAndGroom />}
              googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
            />
          </div>
          <div className="font-Font-3 flex justify-center items-center flex-col text-xl">
            <span>Dress Code:</span>
            <span>Formal</span>
          </div>
        </div>
      </div>
      {/* Confirmar asistencia */}
      <RegistryForm />
      {/* gift */}
      <Present
        cbu="0150885501000009536084"
        alias="SOLEYGASTON"
        titular="Gaston Mauvecin"
        cuil="20-31497875-0"
        children={<Gifts />}
      />
    </div>
  );
};