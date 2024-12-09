import React from 'react'
interface Props {
    children: React.ReactNode
}
const FourGrid = ({children}:Props) => {
  return (
    <div className="grid grid-cols-4 gap-[24px] mt-8">
        {children}
    </div>
  )
}

export default FourGrid