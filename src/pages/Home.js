import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Button2 from '../components/Button2'
import { FaTwitter, FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';
import jsondata from '../jsonData/nftData.json';
import './Home.css'

const Home = () => {

  const [mouse, setMouse] = useState(false);
  
  const nftIds = ["8", "10", "3", "4"]

  const nftInfo = jsondata.nftData;

  const handleMouseEnter = () => {
    setMouse(true); 
  };

  const handleMouseLeave = () => {
    setMouse(false); 
  };

  return (
    <div>
        <div className="home-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <video className="home-nft-video" autoPlay loop playsInline muted>
            <source src="https://stream.mux.com/nzHlNbduVGyvrKDcVrTQEwZq00YWaKjrb8TEOzdRV6WY/high.mp4" type="video/mp4"/>
        </video>
        <Link to='/collections'><Button2 text="View Collections" cssClass="home-button-a" isMouseEnter={mouse} inlineStyle={true}/></Link>
        <span>
          <h6>Discover the world of unique and collectible NFTs</h6> 
          <h1>Experience the future of digital ownership today</h1>
        </span>
        </div>

      
        <div className="featured-nft">
        <h1 className="featured-nft-title">Featured NFTs</h1>
        <div className="featured-nft-grid">
        {nftIds.map((id,index) =>
        ( <Link to={`/collections/nftdetails/${id-1}`}>
          <div key={index} className="nft-item">
            <img src={`assets/NFTImages/${nftInfo[id-1].nftName}.avif`} alt="NFT" className="nft-item-image" />
            <h2 className="nft-item-name">{nftInfo[id-1].nftName}</h2>
          </div>
          </Link>
          )
        )}
        </div>
        </div>
        

       
          <div className='subs-container'>
            <h1>Subscribe to Our Newsletter</h1>
            <p>Stay up-to-date with the latest news, featured NFTs, and exclusive offers 
            by subscribing to our newsletter. Don't miss out on the hottest trends and newest additions 
            to our NFT marketplace.
            </p>
            <div className='subs-form'>
              <input type='text' placeholder='Your Email Address'/>
             <Button2 text="Sign Up" cssClass="home-button-b"/>
            </div>
            <img className='img-1'src='assets/NFTImages/HapebeastMonkey.jpeg' alt="loading error"></img>
            <img className='img-2'src='assets/NFTImages/blackMonkey.jpg' alt="loading error"></img>
          </div>

      <footer className="footer">
      <div className="footer-content">

        <div className="footer-links">
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-social">
          <a href="#" >
            <FaTwitter className="social-icon" />
          </a>
          <a href="#">
            <FaInstagram className="social-icon" />
          </a>
          <a href="#">
            <FaFacebook className="social-icon" />
          </a>
          <a href="#">
            <FaDiscord className="social-icon" />
          </a>
        </div>
       
      </div>
      <div className="footer-contact">
          <p>Email: contact@nftmarketplace.com</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 NFT Marketplace. All rights reserved.</p>
      </div>
    </footer>

    </div>  
  )
}

export default Home
