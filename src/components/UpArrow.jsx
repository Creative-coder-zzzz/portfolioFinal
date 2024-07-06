import React from "react";
import { FaArrowUp } from "react-icons/fa";
const UpArrow = ({ arrow }) => {
  return (
    <div className="flex justify-center z-0" onClick={arrow}>
      <button className="fixed bottom-4 right-4 bg-black/50 text-white text-4xl p-3 rounded-full shadow-lg hover:bg-black transition-all duration-300 mx-2 ">
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default UpArrow;
