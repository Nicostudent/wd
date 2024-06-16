import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Temp1 } from "./templates/Temp1";
import { Landing } from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Temp1 />} />
    </Routes>
  );
}

export default App;
