import { GoogleMaps } from "../utils/icons/GoogleMaps";

type EventDetailsProps = {
  title: string;
  day: string;
  hour: string;
  googleLink: string;
  children?: React.ReactNode;
  color?: string;
};
export const EventDetails = ({
  title,
  day,
  hour,
  children,
  googleLink,
  color,
}: EventDetailsProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center md:gap-10 gap-2 ${
        color ? color : "text-slate-600"
      } `}
    >
      {children && (
        <div className="w-24 h-24 rounded-full object-cover mb-4 md:w-56 md:h-56">
          {children}
        </div>
      )}
      <span className="text-lg tracking-widest md:text-4xl cursor-pointer font-times ">
        {title}
      </span>
      <div className="flex flex-col text-center gap-2 font-dosis">
        <span className="text-sm text-center md:text-2xl cursor-pointer">
          {day}
        </span>
        <span className="text-sm text-center md:text-3xl cursor-pointer">
          {hour}
        </span>
      </div>

      <a className="mt-5" href={googleLink} target="_blank" rel="noopener">
        {/* add 'fill' to the color. example: color:"fill-red-300 */}
        <GoogleMaps color="fill-cyan-800" />
      </a>
    </div>
  );
};
