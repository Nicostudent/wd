type EventDetailsProps = {
  title: string;
  date: string;
  googleLink: string;
  color?: string;
};
export const EventDetails3 = ({
  title,
  date,
  googleLink,
  color,
}: EventDetailsProps) => {
  return (
    <div
      className={`flex flex-col justify-center gap-2 ${
        color ? color : "text-slate-600"
      } `}
    >   
      <a
        className="text-2xl tracking-widest md:text-4xl cursor-pointer font-times "
        href={googleLink}
        target="_blank"
        rel="noopener"
      >
        {title}
      </a>
      <div className="gap-2 font-zilla">
        <span className="text-md text-center tracking-widest md:tracking-normal md:text-2xl cursor-pointer md:ml-24">
          {date}
        </span>
      </div>
    </div>
  );
};
