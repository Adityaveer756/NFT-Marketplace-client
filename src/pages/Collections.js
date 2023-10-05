import React,{useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import './collections.css'

const Collections = () => {

  const nftImagesTop = ['DoriBgImg.gif','EasyDemonClubBgImg.avif','HapebeastBgImg.avif']

  const topNftImageNames = nftImagesTop.map((str) => str.replace(/BgImg\..+$/, ''));

  const nfts = [ 'Hapebeast','Cyber Brokers', 'Dori', 'Easy Demon Club','Azuki','Eon Rift Genesis',
                 'Zed Run', 'Keraverse', 'Xociety Frontier', 'Auras', 'Behind The Veil', 
                 'Ode To Dreams', 'Lord Shiva', 'Xethereal calling', 'VIP Monkey', 'Whimsical Cats', 
                ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the current image index and handle loop back to the first image
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % nftImagesTop.length);
  };

  // Use useEffect to set up the timer for automatic image transition
  useEffect(() => {
    const timer = setInterval(updateImageIndex, 5000); // Change image every 5 seconds
    
    return () => {
        clearInterval(timer);
    } // Cleanup the timer when the component unmounts
  }, []);


  return (
    <div className='collections-container'>
        <div className='img-slider'>
             {nftImagesTop.map((image, index) => (
             <div key={index} className={`slider-div ${index === currentImageIndex ? 'active' : ''}`}>   
             <img
               key={index}
               src={`assets/NFTImages/NFTBgImage/${image}`}
               alt=''
               />
             <h1>{topNftImageNames[index]}</h1>
             <h4>price:0.0001 ETH</h4>
             </div>
           ))}
           
        </div>
        <div className='collections-section'>
            <div className='nft-grid-container'>
                {nfts.map( (nft,index) => (
                    <Link to={`nftdetails/${index}`} >
                        <div key={index} className="nft">
                            <img src={`assets/NFTImages/${nft}.avif`} alt="NFT" className="nft-image" />
                            <h2 className="nft-name">{nft}</h2>
                           
                        </div>
                    </Link>
                ))}

            </div>
        </div>
      
    </div>
  )
}

export default Collections
