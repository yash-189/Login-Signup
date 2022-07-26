import React from 'react'

const Button = ({ btnColor, hoverColor, margin, name, onClick }) => {
  return (
    <>
      <button className={`button inline-flex text-white bg-[#b9b9b938]  py-2 px-6 focus:outline-none hover:bg-${hoverColor} ${margin} rounded text-lg`} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button