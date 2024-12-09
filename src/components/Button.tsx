import React from 'react'
interface Props {
    text :string
}
const Button = ({text}:Props) => {
  return (
    <button
    className="bg-prColor mt-5 text-white w-[190px] h-[60px] rounded-[30px] hover:bg-[#ce8c28] transition duration-300"
  >
    {text}
  </button>
  )
}

export default Button