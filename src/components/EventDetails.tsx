import { useState } from "react";
import { GoogleMaps } from "../utils/icons/GoogleMaps";

type EventDetailsProps = {
  title: string;
  day: string;
  hour: string;
  googleLink: string;
  image?: string;
};
export const EventDetails = ({
  title,
  day,
  hour,
  image,
  googleLink,


}: EventDetailsProps) => {
  const fontFamilies = ['Arial', 'Gwendolyn', 'Dosis', 'British-bounce', 'Times New Roman', "Merriweather", "Alice", "Garamond", "Kalam", "Dancing", "Smooch"];

  // State to keep track of the current font index
  const [fontIndex, setFontIndex] = useState(0);

  // Function to handle font change on title click
  const handleFontChange = () => {
    // Increment font index to cycle through fonts
    setFontIndex((prevIndex) => (prevIndex + 1) % fontFamilies.length);
  };
  console.log(fontFamilies);
  return (
    <div
      className="flex flex-col justify-center items-center md:gap-10 gap-2"
    >
      {image && 
      <img className="w-24 h-24 rounded-full object-cover mb-4
                    md:w-56 md:h-56
      " src={image} alt="" />
      }
      <span 
      onClick={handleFontChange}
      className="text-lg tracking-widest md:text-4xl cursor-pointer
      	"
        style={{ fontFamily: fontFamilies[fontIndex] }}>{title}</span>
      <div  className="flex flex-col text-center gap-2">
      <span  onClick={handleFontChange} style={{ fontFamily: fontFamilies[fontIndex] }} className="text-sm text-center text-slate-600 md:text-2xl cursor-pointer">{day}</span>
      <span  onClick={handleFontChange} style={{ fontFamily: fontFamilies[fontIndex] }} className="text-sm text-center text-slate-600 md:text-3xl cursor-pointer">{hour}</span>
      </div>

      <a className="mt-5" href={googleLink} target="_blank" rel="noopener">
      <GoogleMaps/>
      </a>
    
    </div>
  );
};
