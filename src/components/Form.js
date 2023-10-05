import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiSimilarweb } from 'react-icons/si';
import Button2 from './Button2';
import './Form.css'

const Form = ({formHeading, imageField_a, imageField_b, textFields}) => {

  const [account,setAccount] = useState('')

  const [selectedProfileImage,setSelectedProfileImage] = useState(null)
  
  const [selectedBannerImage,setSelectedBannerImage] = useState(null)

  const userInfoObject = {webLink:'', instaLink:'', twitterLink:''}
  
  const updatedUserInfoObject = {...userInfoObject}
  textFields.forEach((element) => {
    updatedUserInfoObject[element] = ''
  })
  
  const [userInfo,setUserInfo] = useState(updatedUserInfoObject)
  

  const handleImageChange = (event,type) => {
    const imageFile = event.target.files[0]
    if(imageFile){
        const imageUrl = URL.createObjectURL(imageFile)
        if(type=='profile'){
            setSelectedProfileImage(imageUrl)
        }else{
            setSelectedBannerImage(imageUrl)
        }
        
    }
  }

  const handleFormValues = (event) => {
    const {name, value} = event.target
    setUserInfo({
        ...userInfo,
        [name]: value
    })
    console.log(userInfo)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(userInfo, selectedBannerImage, selectedProfileImage)
    
    try {
        const response = await axios.post('http://localhost:4000/api/register', {
          userInfo,
          selectedProfileImage,
          selectedBannerImage,
          account
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        // Handle the response here
        console.log('Response:', response.data);
      } catch (error) {
        // Handle errors here
        console.error('Error:', error);
      }
  }

    //this is repetetive function i need to get the account from the navbar.js remember that
    const getAccount = async () => {
      if(window.ethereum){
        try{
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0])
        }catch(e){
          console.log(e)      
        }
      }else{
        console.log('Metamask not detected')
      }
      
    }
  
  useEffect(() => {
      getAccount()
      window.ethereum.on("accountsChanged", getAccount);
    }, [])
  
  return (
    <form className='form' onSubmit={handleSubmit}>
        <h1>{formHeading}</h1>

        <div className='profile-img'>
            <h3>{imageField_a}</h3>
            <label htmlFor='imageInput-a'>  
                {selectedProfileImage?
                <img alt='profile' src={selectedProfileImage} />
                :
                <img alt='profile' src='/assets/ImagesUsed/ProfileImg.png'/>
                }
            </label>
            <input id='imageInput-a' type='file' accept='/image' 
                   style={{display:'none'}} onChange={(e) =>{ handleImageChange(e, 'profile')}}/>
        </div>
        <div className='banner-img'>
            <h3>{imageField_b}</h3>
            <label htmlFor='imageInput-b'>
                {selectedBannerImage?
                <img alt='profile' src={selectedBannerImage}/>
                :
                <img/>
                }
            </label>
            <input id='imageInput-b' type='file' accept='/image' 
                   style={{display:'none'}} onChange={(e) =>{ handleImageChange(e, 'banner')}}/>
        </div>

        {textFields.map((fieldname,index) => {
            return(
                <div key={index} className='textField'>
                    <h3><label htmlFor='inputTextField'>{fieldname}</label></h3>
                    <input id='inputTextField' type='text' placeholder={`Enter ${fieldname}`} required
                           value={userInfo[fieldname]} name={fieldname} onChange={handleFormValues}/>
                </div>
            )
        })}
        
        <div className='weblink'>
            <div>
                <label htmlFor='inputWebLink'><SiSimilarweb className='weblink-logo'></SiSimilarweb></label>
                <input id='inputWebLink' type='text' placeholder='Enter your website link'
                       value={userInfo.webLink} name='webLink' onChange={handleFormValues}/>
            </div>
        </div>
        <div className='instalink'>
            <div>
                <label htmlFor='inputInstaLink'><FaInstagram className='instalink-logo'></FaInstagram></label>
                <input id='inputInstaLink' type='text' placeholder='Enter your instagram link'
                    value={userInfo.instaLink} name='instaLink' onChange={handleFormValues}/>
            </div>
        </div>
        <div className='twitterlink'>
            <div>
                <label htmlFor='inputTwitterLink'><FaTwitter className='twitterlink-logo'></FaTwitter></label>
                <input id='inputTwitterLink' type='text' placeholder='Enter your twitter link' 
                       value={userInfo.twitterLink} name='twitterLink' onChange={handleFormValues}/>
            </div>
        </div>
        <div className='wallet-address'>
          <p className='label'>Wallet Address</p>
          <p className='address'>{account}</p>
        </div>
        <Button2 cssClass='form-button' text="Save" type='submit'></Button2>
    </form>

  )
}

export default Form
