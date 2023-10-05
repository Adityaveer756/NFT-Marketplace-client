import React from 'react'
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiSimilarweb } from 'react-icons/si';
import './InfoSocials.css'

const InfoSocials = () => {
  return (
    <>
     <div className="info-socials">
        <a href="#">
            <SiSimilarweb className="info-socials-icon" />
        </a>
        <a href="#" >
            <FaTwitter className="info-socials-icon" />
        </a>
        <a href="#">
            <FaInstagram className="info-socials-icon" />
        </a>
        <a href="#">
            <FaDiscord className="info-socials-icon" />
        </a>
    </div>
    </>
  )
}

export default InfoSocials
