"use client";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';  // Importing usePathname from next/navigation
import React from 'react';

const OtherHero = () => {
  const currentPath = usePathname();  // Get the current path from usePathname

  // Remove the leading slash if it exists
  const pathWithoutSlash = currentPath?.startsWith('/') ? currentPath.substring(1) : currentPath;

  return (
    <div
      className="relative w-full h-[330px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/headerbg.svg')" }}
    >
 {/* i don't know how can i center verticaly and  */}
      <div className="w-[220px] h-[104px] ">
        <div className="text-center flex flex-col gap-5 ">
        
          <div className='text-white text-4xl font-bold'>Our {pathWithoutSlash}</div>

        
          <div className="flex justify-center items-center gap-1">
            <div className="text-white">Home</div>
            <ChevronRightIcon className="text-white w-4 h-4" />
            <div className="text-prColor">{pathWithoutSlash}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherHero;
