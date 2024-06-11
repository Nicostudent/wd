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
  return (
    <div
      className="flex flex-col justify-center items-center md:gap-10 gap-2"
    >
      {image && 
      <img className="w-24 h-24 rounded-full object-cover mb-4
                    md:w-56 md:h-56
      " src={image} alt="" />
      }
      <span className="text-lg tracking-widest md:text-4xl	">{title}</span>
      <div className="flex flex-col text-center gap-2">
      <span className="text-sm text-center text-slate-600 md:text-2xl">{day}</span>
      <span className="text-sm text-center text-slate-600 md:text-3xl">{hour}</span>
      </div>

      <a className="mt-5" href={googleLink} target="_blank" rel="noopener">
      <GoogleMaps/>
      </a>
    
    </div>
  );
};
