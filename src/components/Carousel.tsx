import { motion } from 'framer-motion';
import { useState } from 'react';
import img1 from '../assets/images/GastoniPuerto.jpg'
import img2 from '../assets/images/coule11.jpg'
import img3 from '../assets/images/couple3-1.jpg'


const images = [img1, img2,img3];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full z-10"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full z-10"
      >
        Next
      </button>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {images.map((image, index) => {
          const isCurrent = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          let size = "w-1/3 h-1/3";
          let zIndex = 1;
          let opacity = 0.5;
          let x = (index - currentIndex) * 100;

          if (isCurrent) {
            size = "w-2/3 h-2/3";
            zIndex = 2;
            opacity = 1;
            x = 0;
          } else if (isPrev) {
            x = -100;
          } else if (isNext) {
            x = 100;
          }

          return (
            <motion.img
              key={index}
              src={image}
              initial={{ opacity: 0 }}
              animate={{ opacity, x }}
              transition={{ duration: 0.5 }}
              className={`absolute ${size} object-cover`}
              style={{ zIndex }}
            />
          );
        })}
      </div>
    </div>
  );
};
