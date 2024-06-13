import { GoogleMaps } from "../utils/icons/GoogleMaps";

type EventDetailsProps = {
  title: string;
  day: string;
  hour: string;
  googleLink: string;
  children?: React.ReactNode;
};
export const EventDetails = ({
  title,
  day,
  hour,
  children,
  googleLink,
}: EventDetailsProps) => {
  // const fontFamilies = ['Arial', 'Gwendolyn', 'Dosis', 'British-bounce', 'Times New Roman', "Merriweather", "Alice", "Garamond", "Kalam", "Dancing", "Smooch"];

  // const [fontIndex, setFontIndex] = useState(0);

  // const handleFontChange = () => {
  //   // Increment font index to cycle through fonts
  //   setFontIndex((prevIndex) => (prevIndex + 1) % fontFamilies.length);
  // };
  return (
    <div className="flex flex-col justify-center items-center md:gap-10 gap-2">
      {children && (
        <div
          className="w-24 h-24 rounded-full object-cover mb-4
                    md:w-56 md:h-56"
        >
          {children}
        </div>
      )}
      <span
        // onClick={handleFontChange}
        className="text-lg tracking-widest md:text-4xl cursor-pointer  font-Font-2"
        // style={{ fontFamily: fontFamilies[fontIndex] }}
      >
        {title}
      </span>
      <div className="flex flex-col text-center gap-2 font-Font-3">
        <span className="text-sm text-center text-slate-600 md:text-2xl cursor-pointer">
          {day}
        </span>
        <span className="text-sm text-center text-slate-600 md:text-3xl cursor-pointer">
          {hour}
        </span>
      </div>

      <a className="mt-5" href={googleLink} target="_blank" rel="noopener">
        <GoogleMaps />
      </a>
    </div>
  );
};
