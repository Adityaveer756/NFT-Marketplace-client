import React from 'react'
import './LogoImgHeader.css'

const LogoImgHeader = (props) => {
  return (
    <>
      <img className='logo-img-header' src={props.src}></img>
    </>
  )
}

export default LogoImgHeader
