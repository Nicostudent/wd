import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from "../assets/images/landing/img1.jpg";
import img2 from "../assets/images/landing/img2.jpg";
import img3 from "../assets/images/landing/img3.jpg";

const images = [
  { src: img3, link: '/temp2' },
  { src: img1, link: '/temp3' },
  { src: img2, link: '/temp1' },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto ">
      <div className="relative w-full h-64 md:h-96">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
          >
            <Link to={images[currentIndex].link}>
              <img
                src={images[currentIndex].src}
                alt={`Slide ${currentIndex}`}
                className="w-full h-full object-contain rounded-lg"
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 md:-left-12 left-2 transform -translate-y-1/2  text-black p-2 text-4xl opacity-35 border-2 border-slate-900  hover:opacity-70 rounded-full z-50"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 md:-right-12 right-2 transform -translate-y-1/2 text-black p-2 text-4xl opacity-35 border-2 border-slate-900 hover:opacity-70 rounded-full z-10"
      >
        &gt;
      </button>
    </div>
  );
};
