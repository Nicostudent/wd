import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Card2 } from "./templates/temp2/Card2";
import { Temp2 } from "./templates/temp2/Temp2";
import { Temp1 } from "./templates/temp1/Temp1";
import { Card1 } from "./templates/temp1/Card1";
import { Landing } from "./components/Landing";
import { Temp3 } from "./templates/temp3/Temp3";
import { Card3 } from "./templates/temp3/Card3";
import { Temp4 } from "./templates/temp4/temp4";
import { Card4 } from "./templates/temp4/Card4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/card1" element={<Card1 />} />
      <Route path="/temp1" element={<Temp1 />} />
      <Route path="/card2" element={<Card2 />} />
      <Route path="/temp2" element={<Temp2 />} />
      <Route path="/card3" element={<Card3 />} />
      <Route path="/temp3" element={<Temp3 />} />
      <Route path="/Card4" element={<Card4 />} />
      <Route path="/temp4" element={<Temp4 />} />
    </Routes>
  );
}

export default App;
