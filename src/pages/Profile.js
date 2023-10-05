import React from 'react'
import BannerImageHeader from '../components/BannerImageHeader'
import LogoImgHeader from '../components/LogoImgHeader'
import TextInfo from '../components/TextInfo'
import './Profile.css'
import NftGrids from '../components/NftGrids'
import Button2 from '../components/Button2'
import ProfileDetails from './ProfileDetails'
import { Link } from 'react-router-dom'

function Profile() {

  const userLoggedIn = true
  const username = "Aditya"
  const address = "0x96be6A890Da346b6F4756389ddb55f88589764A9"
  const itemsArr = [['Collected NFTs','5'],['Listed NFTs','0']]
  
  
  return (
    <div className='profile-section'>
        {userLoggedIn ?
        <>
        <BannerImageHeader/>
        <LogoImgHeader/>
        <TextInfo heading={username} subheading={address} items={itemsArr} />
        <Link to='/profile/collectiondetails'><Button2 cssClass='profile-button' text='Create Collection' /></Link>
        </>
        : <ProfileDetails/>
        }
    </div>
  )
}

export default Profile
