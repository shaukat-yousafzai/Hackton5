import React from 'react'

import Container from '@/components/Container'
import Image from 'next/image'
import { FaCookieBite, FaWineGlassAlt } from 'react-icons/fa'
import { LiaHamburgerSolid } from 'react-icons/lia'

import KingPara from '@/components/KingPara'

import { PiCoffee, PiPerson, PiStudent } from 'react-icons/pi'
  
const Aboutpage = () => {
  return (
    <div className='flex flex-col mt-11'>
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
        <KingPara text='About ____'/>
         <h3 className='text-4xl text-black font-semibold mt-2 mb-4'>
         Food is an important 
         <br />
         part Of a balanced Diet
         </h3>
        <div className='w-[526px]'>
       <p className='text-gray-900'>
       Lorem ipsum dolor sit amet, consectetur gfgfg  pakist   adipiscing elit. Quisque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
       </p>
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

    <Container className='flex flex-col items-center justify-center mt-10'>
    <h3 className='text-4xl text-black font-semibold mt-2 mb-4'>
           why Choose
         </h3>
         <div className='w-[526px] text-center'>
       <p className='text-gray-900'>
      bibendum. Urna, elit augue urna, vitae feugiat sit 
      <br /> mus risus. Lacus nisi, et ac dapibus 
       </p>
       </div>
       <div className='  mt-5'>
        <Image 
        src={"/images/Heroback.svg"}
        alt='this is image'
        height={300}
        width={1320}
        className='object-cover'
        />

       </div>
    </Container>
    <Container className="grid grid-cols-3 gap-x-32 mt-10 items-center justify-center text-center"
    >
      <div className='flex flex-col items-center'>
        
 <PiStudent className='text-6xl font-normal mb-5'/>
  <h3 className='text-3xl font-bold text-black'> Best chif</h3>
  <p className='flex items-center justify-center mt-4'>Lorem ipsum dolor sit amet, 
   
    consectetur  <br /> adipiscing elit. 
   
     Quisque diam pellentesque  <br /> bibendum non dui volutpat </p>

 
      </div>
      <div className='flex flex-col items-center'>
      <PiCoffee className='text-6xl font-normal' />
      <h3 className='text-3xl font-bold text-black'> 120 Item food</h3>
  <p className='flex items-center justify-center mt-4'>Lorem ipsum dolor sit amet, 
   
    consectetur  <br /> adipiscing elit. 
   
     Quisque diam pellentesque  <br /> bibendum non dui volutpat </p>
      </div>
      <div className='flex flex-col items-center'>
      <PiPerson className='text-6xl font-normal' />
      <h3 className='text-3xl font-bold text-black'> Clean Enviroment</h3>
  <p className='flex items-center justify-center mt-4'>Lorem ipsum dolor sit amet, 
   
    consectetur  <br /> adipiscing elit. 
   
     Quisque diam pellentesque  <br /> bibendum non dui volutpat </p>
      </div>
    </Container>
    <div className="relative w-full h-[300px] bg-prColor my-14">
  {/* First Section (Header Content) */}
  <div className="absolute w-full h-1/2 flex flex-col justify-center">
    <h3 className="text-3xl flex justify-center font-bold text-white">Team Member</h3>
    <p className="text-center text-white mt-4">
      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque diam pellentesque
    </p>
  </div>

  {/* Second Section (Grid in Container) */}
  <div className="absolute bottom-0 translate-y-1/2 w-full">
  <Container className=' flex  items-center justify-around'>
  <div className="  flex items-center justify-center">
    <Image
    src={'/images/Mark.svg'}
    alt='this is image'
    height={398}
    width={312}
    className='object-cover'
    />
  </div>
  <div className=" h-72 flex items-center justify-center">
    <Image
    src={'/images/Mark.svg'}
    alt='this is image'
    height={398}
    width={312}
    className='object-cover'
    />
  </div>
  <div className=" h-72  flex items-center justify-center">
    <Image
    src={'/images/Mark.svg'}
    alt='this is image'
    height={398}
    width={312}
    className='object-cover'
    />
  </div>
  <div className=" h-72 flex items-center justify-center">
    <Image
    src={'/images/Mark.svg'}
    alt='this is image'
    height={398}
    width={312}
    className='object-cover'
    />
  </div>
  </Container>
   
  </div>
</div>



    </div>
   
  )
}

export default Aboutpage