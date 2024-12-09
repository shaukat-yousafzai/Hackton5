import Image from 'next/image';
import Container from './Container';
import KingPara from './KingPara';
import Heding from './Heding';
import MainPara from './MainPara';

import {  FaCookieBite,  FaWineGlassAlt } from 'react-icons/fa';
import { LiaHamburgerSolid } from 'react-icons/lia';


export default function WHyHome() {
  return (

  <div>
      <Container className='mt-20 flex items-center justify-center ' >
    <div className="grid grid-rows-2 gap-4 items-center justify-center">
      {/* First Row */}
      <div className="grid grid-cols-2 items-end gap-0">
        {/* Big Image (Left Side) */}
        <div className="w-[362px] h-[356px]">
          <Image
            src="/images/why1.svg"
            alt="Big Image"
            layout="responsive"
            width={362}
            height={356}
            className="object-cover"
          />
        </div>

        {/* Small Image (Right Side) */}
        <div className="w-[281px] h-[231px]">
          <Image
            src="/images/why2.svg"
            alt="Small Image 1"
            layout="responsive"
            width={281}
            height={231}
            className="object-cover"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-3 items-start gap-2">
        {/* First Column */}
        <div className="w-[244px] h-[306px]">
          <Image
            src="/images/why4.svg"
            alt="Small Image 2"
            layout="responsive"
            width={244}
            height={306}
            className="object-cover"
          />
        </div>

        {/* Second Column */}
        <div className="w-[221px] h-[226px]">
          <Image
            src="/images/why5.svg"
            alt="Small Image 3"
            layout="responsive"
            width={221}
            height={226}
            className="object-cover"
          />
        </div>

        {/* Third Column */}
        <div className="grid w-[160px] grid-rows-2 gap-4 items-start justify-center">
          <div>
            <Image
              src="/images/fourgrid3.svg"
              alt="Small Image 5"
              layout="responsive"
              width={170}
              height={166}
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/why6.svg"
              alt="Small Image 4"
              layout="responsive"
              width={170}
              height={168}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col items-start justify-center'>
        <KingPara text='Why Choose Us'/>
        <Heding 
        ptext='Ex'
        text='tra Ordinary taste '
        tgtext='And Experienced'
        
        />
        <div className='w-[526px]'>
        <MainPara 
        text='Lorem ipsum dolor sit amet, consectetur gfgfg  pakist is my country world   adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
        
        />
        </div>
        <div className='flex  justify-between w-[374px] my-5'>
            <div>
                <div className='w-[102px] h-[100px] font-extralight text-6xl flex rounded-md  items-center justify-center bg-prColor text-white'>
                 <LiaHamburgerSolid/>
                 
                </div>
                <p className='text-center text-white mt-2'>Fast Food</p>
            </div>
            <div>
            <div className='w-[102px] h-[100px] font-extralight text-6xl flex rounded-md  items-center justify-center bg-prColor text-white'>
                <FaCookieBite />
             </div>
             <p className='text-center text-white mt-2'>Lunch</p>
            </div>
            <div>
            <div className='w-[102px] h-[100px]  flex rounded-md text-5xl items-center justify-center bg-prColor text-white'>
              <FaWineGlassAlt/>
            </div>
            <p className='text-center text-white mt-2'>Drinner</p>
            </div>
            
        </div>
        <Image
         src={"/images/experince.png"}
         alt='30 year of experince'
         height={92}
         width={374}
        />
        
    </div>

    </Container>
    <div className='relative w-full h-[469px] mt-20 flex items-center justify-center'>
    <div
        className="absolute  inset-0 bg-[url('/images/Heroback.svg')] bg-cover bg-center opacity-15 z-0"
        aria-hidden="true"
      ></div>
    <Container className='flex items-center justify-center'>
      <div className='flex items-center justify-center z-10'>
      <Image 
      src={"/images/icon.png"}
      alt="this is image"
      height={247}
      width={1319}
      />
      </div>
     
    </Container>
    </div>
    <Container className='flex items-center justify-center  py-20'>
    <Image 
      src={"/images/Menuo.png"}
      alt="this is image"
      height={656}
      width={1320}
      />
    </Container>

  </div>
  );
}
