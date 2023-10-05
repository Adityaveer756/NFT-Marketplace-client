import React from 'react'
import InfoSocials from './InfoSocials'
import './TextInfo.css'

const TextInfo = (props) => {
  return (
    <>
      <div className='text-info-top'>
            <h1>{props.heading}</h1>
            <InfoSocials/>
      </div>
      <div className='text-info-bottom'>
          <h3>{props.subheading}</h3>
          <div className='text-info-bottom-details'>
              {props.items.map ((item, index) => (
                  <div key={index} className='text-info-bottom-details-item'>
                      <h1>{item[1]}</h1>
                      <h4>{item[0]}</h4>
                  </div>
                ))}
          </div>
      </div>
    </>
  )
}

export default TextInfo
