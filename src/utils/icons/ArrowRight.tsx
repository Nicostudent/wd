import { Link } from "react-router-dom";

export const ArrowRight = () => {
  return (
    <Link
      to="/main"
      className="font-Font-3 font-bold md:text-4xl  text-2xl flex gap-4   "
    >
      <div className="  flex flex-col justify-center items-center text-center">
        <svg
          width="4rem"
          height="3rem"
          viewBox="0 0 1024 724"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M938.666667 512L640 761.6V262.4z" fill="#374151" />
          <path d="M128 426.666667h576v170.666666H128z" fill="#374151" />
        </svg>
        <span className="text-xl">SOON</span>
      </div>
      
      <span className="text-center self-center">Link de ingreso</span>
    </Link>
  );
};
