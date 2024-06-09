import { useState } from "react";

export const Burger = () => {
  const [active, setActive] = useState(false);

  return (
    <button  onClick={() => setActive(!active)}>
      {!active ? (
        <svg        
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 6.001h18m-18 6h18m-18 6h18"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 3.001v18m-6-18v18m-6-18v18"
          />
        </svg>
      )}
    </button>
  );
};
