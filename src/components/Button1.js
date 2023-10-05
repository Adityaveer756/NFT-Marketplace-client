import React from 'react'
import './Button1.css'

const Button1 = (props) => {
  return (
    <>
      <button className='button-1' onClick = {props.onClick}>{props.text}</button>
    </>
  )
}

export default Button1;
