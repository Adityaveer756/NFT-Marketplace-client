import React, {useEffect, useRef, useState} from 'react'
import Web3 from 'web3';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Button1 from './Button1';
import {FaSearch} from 'react-icons/fa';
import {AiFillWallet} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import {CgClose, CgProfile} from 'react-icons/cg'

const Navbar = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');

  const [showProfile, setShowProfile] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const currentPath = location.pathname
  const [pathProfileIcon,setPathProfileIcon] = useState('/profile')

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const connectWallet = async () => {
    console.log('connect wallet called')
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      try {
        // Request account access using the new method
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts)
        // Set web3 instance and account
        setShowProfile(true);
        setWeb3(web3Instance);
        console.log(web3Instance)
        setAccount(accounts[0]);
        console.log(accounts[0])
        

      } catch (error) {
        console.error(error);
      }
    } else {
      alert('MetaMask not detected.');
    }
  }

  const addAccountListner = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", handleAccountChange);
    } else {
      /* MetaMask is not installed */
      setShowProfile(false)
      console.log("Please install MetaMask");
    }
  }

  const removeAccountListner = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.removeListener("accountsChanged", handleAccountChange);
    } else {
      /* MetaMask is not installed */
      setShowProfile(false)
      console.log("Please install MetaMask");
    }
  }

  const handleAccountChange = (accounts) => {
    if(accounts.length == 0){
      setShowProfile(false);
      navigate('/')
    } 
  }

  useEffect(() => {
    console.log('useeffect2 called')
    setPathProfileIcon('/profile')
    if(currentPath=='/profile'){
      setPathProfileIcon('/profile/profiledetails')
    }
  },[currentPath])

  
  useEffect(() => {
    connectWallet()
    addAccountListner()
    
    return () => {
      removeAccountListner()
    }
  }, [])

  return (
  <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to='/' className="brand">NFT Market</Link>
     
        <ul className={`nav-links ${isMenuOpen ? 'menu-open' : ''}`}>
          <li><Link to='/collections'>Collections</Link></li>
        </ul>
        
        <div className="search-bar-wrapper">
          <FaSearch className='search-icon-1'/>
          <input
          type="text"
          className="search-input"
          placeholder="Search..."
          />
        </div>
        { showProfile?
          ( <Link to={pathProfileIcon} className='profile-link'><CgProfile className='profile'/></Link>)
          :
          (<Button1 text="Connect Wallet" onClick={connectWallet}></Button1> )
        }
       

        <ul className="mobile-menu">
          <li><a href='#'><FaSearch className='search-icon-2'></FaSearch></a></li>
          <li><a href='#'><AiFillWallet className='wallet'></AiFillWallet></a></li>
          { isMenuOpen ? 
          (<li><a href='#'><CgClose className="menu-close" onClick={toggleMenu}></CgClose></a></li>) 
          :
          (<li><a href='#'><FiMenu className='menu' onClick={toggleMenu}></FiMenu></a></li>)
          }

          
        </ul>
      </div>
    </nav>
</>
  )
}

export default Navbar;