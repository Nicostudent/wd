// NavBar.jsx
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowTop } from "../utils/icons/ArrowTop";

export const WebNavBar = ({
  hoverTxt,
  hoverBg,
  jusfity,
  es,

}: {
  hoverTxt?: string;
  hoverBg?: string;
  jusfity?:string;
  es?: boolean;
}) => {
  const [showUpButton, setShowUpButton] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const linkStyle = `${hoverBg ? hoverBg : "hover:bg-amber-300"} ${hoverTxt ? hoverTxt : "hover:text-white"} w-fit px-4 hover:bg-opacity-30   rounded `;
  
  return (
    <div className={`font-Dosis flex items-center gap-5 ${jusfity ? jusfity : "justify-center"} w-full text-2xl  `}>
      <ScrollLink className={linkStyle} to="home" smooth={true} duration={500}> {es ? "Inicio" : "Home"}</ScrollLink>
      <ScrollLink className={linkStyle} to="Party" smooth={true} duration={500}> {es ? "Evento" : "Wedding Party"}</ScrollLink>
      <ScrollLink className={linkStyle} to="Registry" smooth={true} duration={500}> {es ? "Registro" : "Registry"}</ScrollLink>
      <ScrollLink className={linkStyle} to="Presents" smooth={true} duration={500}> {es ? "Regalos": "Presents"}</ScrollLink>

      {showUpButton && (
        <div className="fixed bottom-5 right-10 z-50 w-16 h-16 cursor-pointer border-2 bg-slate-50 bg-opacity-55 p-2 rounded-lg">
          <ScrollLink to="home" smooth={true} duration={1600}>
            <ArrowTop />
          </ScrollLink>
        </div>
      )}
    </div>
  );
};
