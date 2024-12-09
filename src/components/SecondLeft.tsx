import React from 'react'
import KingPara from './KingPara'
import Heding from './Heding'
import MainPara from './MainPara'
import { CheckIcon } from '@heroicons/react/24/outline'
import Button from './Button'

const SecondLeft = () => {
  return (
    <div className="flex flex-col justify-start  items-start w-[562px]">
     <KingPara 
     text='About Us'
     />
     <Heding 
     ptext='We '
     text='Create the best'
     tgtext='foody product'
     />
     <MainPara
     text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
     />
     <div className='flex items-center'>
      <CheckIcon className='w-4 h-3 text-white'/>  <MainPara text=' Lacus nisi, et ac dapibus sit eu velit in consequat.'/>
     </div>
     <div className='flex items-center'>
      <CheckIcon  className="h-3 w-4 text-white"/>    <MainPara text=' Quisque diam pellentesque bibendum non dui volutpat fringilla '/>
     </div>
     <div className='flex items-center'>
      <CheckIcon  className="h-3 w-4 text-white"/>  <MainPara text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
     </div>
     <Button text='Read More'/>
    </div>
  )
}

export default SecondLeft