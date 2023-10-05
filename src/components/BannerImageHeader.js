import React from 'react'
import './BannerImageHeader.css'

const BannerImageHeader = (props) => {
  return (
    <>
      <img className="banner-image-header" src={props.src}></img>
    </>
  )
}

export default BannerImageHeader
