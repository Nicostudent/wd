import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Temp1 } from "./templates/Temp1";
import { Temp1PartyGuest } from "./templates/Temp1PartyGuest";
import { Landing } from "./components/Landing";
import { LandingParty } from "./components/LandingParty";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Temp1 />} />
      <Route path="/partyCard" element={<LandingParty />} />
      <Route path="/party" element={<Temp1PartyGuest />} />


    </Routes>
  );
}

export default App;
