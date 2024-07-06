import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Cards from "./Cards"; // Import your Cards component

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!cards || cards.length === 0) {
    return <div>No cards available</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <button
        onClick={handlePrev}
        className="p-2 text-3xl text-white bg-transparent border-none cursor-pointer z-10"
      >
        <FaChevronLeft />
      </button>
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
        <div className="flex items-center justify-center w-full h-full">
          {cards.map((card, index) => {
            const offset = index - currentIndex;
            const translateX = offset * 100;
            const scale = currentIndex === index ? 1 : 0.8;
            const opacity = currentIndex === index ? 1 : 0.5;

            return (
              <div
                key={index}
                className="absolute transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  opacity,
                  zIndex: currentIndex === index ? 10 : 5,
                }}
              >
                <div className="w-full max-w-sm">
                  <Cards cardData={card} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="p-2 text-3xl text-white bg-transparent border-none cursor-pointer z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CardSlider;
