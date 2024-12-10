import Image from 'next/image'
import React from 'react'
import Container from './Container'
import Heding from './Heding'
import MainPara from './MainPara'
import { BiLoader } from 'react-icons/bi'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-24 bg-black'> 
     <Container>
        <div>
            <div>
                <Container className='flex flex-col justify-around mx-6'>
                    <div className='flex items-center justify-between'>
                    <div >
                        <Heding
                        ptext='St'
                        text='ill You Need Support?'
                        />
                       <MainPara
                       text='what is your name my name is shaukat and how are you '
                       />
                    </div>
                    <div className='flex h-12 items-center'>
                        <input type="email" 
                         height={56}
                         placeholder='enter your email'
                         className='h-12 bg-prColor text-white w-60'
                        /> 
                        <div className='w-30 h-12 bg-white flex items-center'>
                                subcribe Now
                        </div>
                        
                    </div>
                    </div>
                    <div className='w-full h-1 bg-prColor mt-4'>

                    </div>
                </Container>
                <div className='grid grid-cols-4 items-start  mt-6'>
                    <div className='w-96'>
                    <h3 className='text-3xl text-white font-bold'>
                            About
                           </h3>
                        <div className='w-96'>
                            <MainPara 
                            text='orporate clients and leisure travelers tjoe toj  hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.'
                            />
                        </div>
                        <div className='flex items-center justify-start gap-2 mt-6 h-16 '>
                            <div className='w-16 h-16 bg-prColor flex items-center justify-center'>
                                 <BiLoader/>
                            </div>
                            <div>
                                <MainPara 
                                text='Opening Horuse'
                                />
                                <p className='text-sm text-white'>Mon - Sat(8:00 - 6:00)</p>
                                <p className='text-sm text-white'>Sunday - Closed</p>
                            </div>
                        </div>
                    </div>
                        <div className='flex flex-col items-center text-start'>
                         <div className='flex flex-col items-center'>
                         <h3 className='text-3xl text-white font-bold'>
                            UseFul
                           </h3>

                            <div className='text-white mt-3 flex flex-col items-start'>
                            <Link
                             href={"/About"}
                             className='mt-2'
                             >About</Link>
                                 <Link
                                    className='mt-2'
                             href={"/About"}

                             >About</Link>
                                 <Link
                                    className='mt-2'
                             href={"/About"}
                             >About</Link>
                                 <Link
                                    className='mt-2'
                             href={"/About"}
                             >About</Link>
                                 <Link
                                    className='mt-2'
                             href={"/About"}
                             >About</Link>
                                 <Link
                             href={"/About"}
                                className='mt-2'
                             >About</Link>
                            </div>
                         </div>
                          
                        </div>
                        <div className='flex flex-col items-start'>
                           <h3 className='text-3xl text-white font-bold'>
                            Help
                           </h3>

                            <div className='text-white mt-3 flex flex-col items-start'>
                            <Link
                             href={"/About"}
                             className='mt-2'
                             >About</Link>
                                 <Link
                                    className='mt-2'
                             href={"/About"}

                             >About</Link>
                                 <Link
                                    className='mt-2'
                             href={"/About"}
                             >About</Link>
                                 <Link
                                    className='mt-2'
                             href={"/About"}
                             >About</Link>
                                 <Link
                                    className='mt-2'
                             href={"/About"}
                             >About</Link>
                                 <Link
                             href={"/About"}
                                className='mt-2'
                             >About</Link>
                            </div>
                          
                        </div>
                        <div className='text-white mt-3 flex flex-col items-start'>
                        <h3 className='text-3xl text-white font-bold'>
                            Recent post
                           </h3>
                           <div className='flex items-center justify-start gap-2 mt-6 h-16 '>
                            <div className='w-16 h-16 object-cover flex items-center'>
                                <Image 
                                src={"/images/about1.svg"}
                                alt='this is image'
                                height={90}
                                width={90}
                                className='object-cover'
                                />
                            </div>
                            <div>
                                <MainPara 
                                text='this food good '

                                />
                                <p className='text-sm text-white'>Mon - Sat(8:00 - 6:00)</p>
                              
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-2  h-16 '>
                            <div className='w-16 h-16 object-cover flex items-center'>
                                <Image 
                                src={"/images/about1.svg"}
                                alt='this is image'
                                height={90}
                                width={90}
                                className='object-cover'
                                />
                            </div>
                            <div>
                                <MainPara 
                                text='this food good '

                                />
                                <p className='text-sm text-white'>Mon - Sat(8:00 - 6:00)</p>
                              
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-2  h-16 '>
                            <div className='w-16 h-16 object-cover flex items-center'>
                                <Image 
                                src={"/images/about1.svg"}
                                alt='this is image'
                                height={90}
                                width={90}
                                className='object-cover'
                                />
                            </div>
                            <div>
                                <MainPara 
                                text='this food good '

                                />
                                <p className='text-sm text-white'>Mon - Sat(8:00 - 6:00)</p>
                              
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
     </Container>
     <div className='h-24 bg-[#4f4f4f]'>
        <Container className='flex items-center justify-between'>
            <MainPara
            text='Copyright © 2022 by shaukat. All Rights Reserved.'
            />
            <div className='flex items-center justify-center gap-6'>
                <div className='w-9 h-9 bg-white'></div>
                <div className='w-9 h-9 bg-white'></div>
                <div className='w-9 h-9 bg-white'></div>
                <div className='w-9 h-9 bg-white'></div>
                <div className='w-9 h-9 bg-white'></div>

            </div>
        </Container>

     </div>
    </div>
  )
}

export default Footer