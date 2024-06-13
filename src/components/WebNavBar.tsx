// NavBar.jsx
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowTop } from '../utils/icons/ArrowTop';

export const WebNavBar = () => {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) { 
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center gap-12 justify-center font-Font-3 text-2xl  ">
      <ScrollLink className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="home" smooth={true} duration={500}>Home</ScrollLink>
      {/* <ScrollLink className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="Story" smooth={true} duration={500}>Our Story</ScrollLink> */}
      <ScrollLink className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="Party" smooth={true} duration={500}>Wedding Party</ScrollLink>
      {/* <ScrollLink className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="ToDo" smooth={true} duration={500}>To Do</ScrollLink> */}
      <ScrollLink className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="Registry" smooth={true} duration={500}>Registry</ScrollLink>
      <ScrollLink className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="Presents" smooth={true} duration={500}>Presents</ScrollLink>

      {showUpButton && (    
        <div className="fixed bottom-10 right-10 z-50 w-16 h-16 cursor-pointer">
         <ScrollLink  to="home" smooth={true} duration={500}><ArrowTop/></ScrollLink>          
        </div>
      )}   
    </div>
        );
};
