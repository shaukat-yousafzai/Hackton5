import React from 'react'
interface Props {
    text: string
}
const KingPara = ({text}:Props) => {
  return (
    <p
    className="text-[#FF9F0D] font-greatvibes  text-[32px] font-normal leading-[40px]"
  >
   {text}
  </p>
  )
}

export default KingPara