import "./App.css";
import { Home } from "./components/Home";
import { Story } from "./components/Story";
import SepiaGris from "./assets/images/SepiaGris.jpg";
import just_wg from "./assets/images/just_wh.gif";
import { EventDetails } from "./components/EventDetails";
import { RegistryForm } from "./components/RegistryForm";
import { Present } from "./components/Present";

function App() {
  return (
    <div className=" h-full bg-slate-50 bg-bgSepiaSplash1 bg-no-repeat bg-cover ">
      <Home
        she="Sole"
        he="Gastón"
        date="5 de Agosto, 2024"
        city="Tucumán - Argentina"
      />

      {/* story */}
      <Story
        title="Our Story"
        storie="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          amet, et exercitationem, odio distinctio minus asperiores ullam,
          quidem adipisci obcaecati deleniti odit incidunt dolorum numquam
          explicabo eius laboriosam architecto. Iure? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          amet, et exercitationem, odio distinctio minus asperiores ullam,
          quidem adipisci obcaecati deleniti odit incidunt dolorum numquam
          explicabo eius laboriosam architecto. Iure?"
        image={SepiaGris}
      />

      {/* ceremonia y fiesta googlemap --when & where--  */}
      <div id="Party" className="h-screen flex justify-center items-center flex-col">
        <img className="w-1/5 mt-20" src={just_wg} alt="" />
        <div className="flex h-screen flex-col md:flex-row md:justify-evenly w-2/3 gap-4">
          <EventDetails
            title="Ceremonia"
            date="5 de Agosto de 2024, 16.15hs"
            address="Parroquia Nuestra Señora del Valle - Yerba Buena, Tucumán."
            googleLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56972.173324776166!2d-65.3346375187099!3d-26.815742989705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242d62123af13%3A0xaa2edb3420b1b358!2sParroquia%20Nuestra%20Se%C3%B1ora%20del%20Valle!5e0!3m2!1sen!2sar!4v1717856265013!5m2!1sen!2sar"
          />
          <EventDetails
            title="Fiesta"
            date="5 de Agosto de 2024, 17.30hs"
            address="Salón Country San Pablo - Yerba Buena, Tucumán."
            googleLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010.9751735603761!2d-65.3236156710604!3d-26.847168449393322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942243724e3770d3%3A0x9bd5dce35e9f0452!2sSan%20Pablo%20Country%20living!5e0!3m2!1sen!2sar!4v1717855656702!5m2!1sen!2sar"
          />
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
