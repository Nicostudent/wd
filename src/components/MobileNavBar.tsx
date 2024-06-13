import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import { BurgerClosed } from '../utils/icons/BurgerClosed';
import { Burger } from '../utils/icons/BurgerOpen';
// import { Burger } from '../utils/icons/Burger';

export const MobileNavBar = () => {
const [active, setActive] = useState(false)

  return (
    <div>
        {/* <Burger setActive={() => (!active)}/> */}
        <button onClick={() => setActive(!active)}>{!active ? <Burger/> : <BurgerClosed/>}</button>
        {active && (
              <div className="flex flex-col fixed w-full items-center gap-12 py-4 justify-center font-Font-3 text-lg bg-slate-400 opacity-90 text-white font-bold rounded left-0 z-50">
              <ScrollLink onClick={() => setActive(false)} className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="home" smooth={true} duration={500}>Home</ScrollLink>
              {/* <ScrollLink  onClick={() => setActive(false)} className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="Story" smooth={true} duration={500}>Our Story</ScrollLink> */}
              <ScrollLink  onClick={() => setActive(false)} className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="Party" smooth={true} duration={500}>Wedding Party</ScrollLink>
             
              <ScrollLink  onClick={() => setActive(false)} className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="Registry" smooth={true} duration={500}>Registry</ScrollLink>
              <ScrollLink onClick={() => setActive(false)}  className=' cursor-pointer hover:bg-amber-300 w-fit px-4 hover:bg-opacity-30 hover:text-white  rounded' to="Presents" smooth={true} duration={500}>Presents</ScrollLink>
          </div>
        )}              
    </div>
  )
}
