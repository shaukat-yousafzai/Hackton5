import React from 'react';

import Circle from './Circle';
import Image from 'next/image';

const Righthero = () => {
  return (
    <div className=" relative h-screen flex items-center justify-center w-[877px]">
      {/* Wrapper div for Circle and teft.svg */}
      <div className="relative flex">
        
        {/* Circle and teft.svg combined */}
        <div className="relative flex items-center justify-center">
          <div className='-left-1/3 transform -translate-x-1/4'>
            {/* Circle component */}
            <Circle />
          </div>

          {/* teft.svg */}
          <div className="absolute h-[700px] w-[382.84px] -right-1/4 transform translate-x-[12.5%] -bottom-28 overflow-hidden">
            <Image
              src="/images/teft.svg"
              alt="this is tree teft"
              width={382.84}
              height={700}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Image - reactangle.svg centered with half inside the circle */}
        <div className="absolute w-[624.15px] h-[633.51px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/reactangle.svg"
            alt="this is picture"
            height={633.51}
            width={624.15}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Righthero;
