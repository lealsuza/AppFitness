import React from "react";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <FiChevronDown className="text-primary animate-bounce" size={24} />
          <Link
            className="bg-primary hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
            href={"/login"}
          >
            Entre aqui!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
