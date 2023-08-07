import React from 'react'
import calculator from './logic/calculator'

const Buttons = ({obj, name , setObj}) => {
  const handleClick = (e) =>{
    setObj(calculator(obj,e.target.innerText))
  }

  const operator = ['+', '-', '÷', 'x', '=']

  return (
    <button type="button"
    className={`grid-item ${operator.includes(name) ? 'grid-item-color' : ''} ${(name === '0') ? 'grid-item-zero': ''}`}
      onClick={(e) => handleClick(e)}
    >
      {name}
    </button>
  )
}

export default Buttons
