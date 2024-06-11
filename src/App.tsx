import "./App.css";
import { Home } from "./components/Home";
import { EventDetails } from "./components/EventDetails";
import { RegistryForm } from "./components/RegistryForm";
import { Present } from "./components/Present";
import church from './assets/images/church.jpg';
import party from './assets/images/party.jpg'

function App() {
  return (
    <div className="w-full h-full bg-slate-50 ">
      <Home/>

      {/* ceremonia y fiesta googlemap --when & where--  */}
      <div id="Party" className="h-full w-full flex flex-col justify-center align-middle items-center mt-20">
        <div className="flex flex-col justify-evenly h-full w-full">

        <span className="text-2xl text-center md:text-7xl mb-10  ">Step by Step</span>
        <div className="flex justify-evenly gap-4 w-full mt-20 md:justify-center md:gap-60">
          <EventDetails
            title="Ceremonia"
            day="5 de Agosto de 2024"
            hour="16.15hs"
            image={church}
            googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
            />
          <EventDetails
            title="Fiesta"
            day="5 de Agosto de 2024"
            hour="17.30hs"
            image={party}
            googleLink="https://maps.app.goo.gl/34gXmGheBxN6B8Nn8"
            />
            </div>
            <div></div>
        </div>
      </div>
      {/* Confirmar asistencia */}
     <RegistryForm/>
      {/* gift */}
   <Present
   cbu='0150885501000009536084'
   alias="SOLEYGASTON"
   titular='Gaston Mauvecin'
   cuil="20-31497875-0"
   aditionalNote="Para depositos en efectivo habra un buzón en el salón"    
   />
    </div>
  );
}

export default App;
