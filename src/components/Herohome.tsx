import React from 'react';
import VerticalLine from './llin';
import Container from './Container';
import LeftHero from './LeftHero';
import Righthero from './Righthero';

const Herohome = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/images/Heroback.svg')] bg-cover bg-center opacity-5 z-0"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative flex items-center">
        {/* Vertical Line Positioned Inside the Container but Appearing Outside */}
        <Container className="relative flex items-center">
          <div
            className="absolute left-[-20px]  z-10"
            style={{ transform: 'translateX(-20px)' }} // Moves it 20px outside the container
          >
            <VerticalLine />
          </div>
          {/* Main Content */}
          <div className='flex items-center justify-between gap-2'>
          <LeftHero />
          <Righthero />
          </div>
         
        </Container>
      </div>
    </div>
  );
};

export default Herohome;
