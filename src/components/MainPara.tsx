import React from 'react'
interface Props {
 text: string

}
const MainPara = ({text  }:Props) => {
  return (
    <p className="my-1 font-inter text-white text-[16px] font-normal leading-[24px] tracking-tighter">
       {text}
      
      </p>
  )
}

export default MainPara