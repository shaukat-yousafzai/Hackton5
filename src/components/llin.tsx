import React from 'react';
import { FaFacebookF, FaPinterest, FaTwitter } from 'react-icons/fa';

const VerticalLine = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* First section: 2px border */}
      <div className="h-[158px] border-l-[2px] border-white"></div>

      {/* Second section: Icons */}
      <div className="flex flex-col items-center space-y-4 my-4">
        <FaFacebookF className="text-white text-xl" />
        <FaTwitter className="text-prColor text-2xl" />
        <FaPinterest className="text-white text-xl" />
      </div>

      {/* Third section: 2px border */}
      <div className="h-[158px] border-l-[2px] border-white"></div>
    </div>
  );
};

export default VerticalLine;
