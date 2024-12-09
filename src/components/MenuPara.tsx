import React from 'react'
interface Props {
 
 h:string
 className:string
 rs:number
 pl:string
 ps: number
}
const MenuPara = ({h,className,rs,pl,ps}:Props) => {
  return (
      <div className='w-[760px] '>
       
        <div className={`text-2xl font-bold font-serif mb-3 flex items-center justify-between`}>
            <h2 className={`${className}`}>{h}</h2>
             <h2 className='text-prColor'>{rs}$</h2>
        </div>
        <p className='text-base mb-1 text-[#4f4f4f]'>{pl}</p>
        <p className='text-sm mb-1 text-[#828282]'>{ps} CAL</p>
        </div>
     
  )
}

export default MenuPara