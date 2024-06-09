import { useEffect, useState } from "react";

type StoryProps = {
  title: string;
  storie: string;
  image?: string;
};

export const Story = ({ title, storie, image }: StoryProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="h-screen flex justify-center items-center border-4 border-blue-500"
      id="Story"
    >
      {isMobile ? (
        <div className="flex flex-col justify-center items-end">
          {image && (
            <img
              className="flex justify-center self-end object-scale-down h-4/6 rounded-md"
              src={image}
              alt=""
            />
          )}
          <div className="flex flex-col justify-center items-center w-full">
            <span className="border-2 font-bold">{title}</span>
            <span>{storie}</span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center w-1/5 mr-6">
            <span className="border-2 font-bold">{title}</span>
            <span>{storie}</span>
          </div>
          {image && (
            <img
              className="flex justify-center self-end object-scale-down h-4/6 rounded-md"
              src={image}
              alt=""
            />
          )}
        </>
      )}
    </div>
  );
};
