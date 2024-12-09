import React from 'react'
interface Props {
    ptext?: string
    text : string
   
    tgtext?:string
}
const Heding = ({text,ptext,tgtext}:Props) => {
  return (
    <h1
    className="text-white mb-4 text-[60px] font-sans font-bold leading-[68px] tracking-tighter"
    style={{ textUnderlinePosition: "from-font", textDecorationSkipInk: "none" }}
  >
   <span className="text-prColor">{ptext}</span>{text}
     <br />
      {tgtext}
  </h1>
  )
}

export default Heding