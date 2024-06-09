type EventDetailsProps = {
  title: string;
  date: string;
  address: string;
  googleLink: string;
};
export const EventDetails = ({
  title,
  date,
  address,
  googleLink,
}: EventDetailsProps) => {
  return (
    <div
      className="flex flex-col  justify-center items-center md:gap-10 gap-2"
    >
      <span className="text-4xl font-bold">{title}</span>
      <span className="italic text-2xl">{date}</span>
      <span className="text-sm font-light">{address}</span>
      <iframe        
      className="rounded-full size-40 md:size-80 border-8"
      src={googleLink}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    </div>
  );
};
