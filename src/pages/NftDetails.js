import React from 'react'
import jsonData from '../jsonData/nftData.json'; 
import { useParams } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiSimilarweb } from 'react-icons/si';
import './NftDetails.css';
import BannerImageHeader from '../components/BannerImageHeader';
import LogoImgHeader from '../components/LogoImgHeader';
import TextInfo from '../components/TextInfo';
import NftGrids from '../components/NftGrids';

const NftDetails = () => {
  
  const { id } = useParams()
  const nftInfo = jsonData.nftData[id]
  const nftName = nftInfo.nftName.toUpperCase()
  const artist = `By ${nftInfo.artist}`
  const nftItemsDetails = [["Items", nftInfo.items],["Floor Price", `${nftInfo.floorPrice} ETH`]]




  return (
    <div className='nft-details-container'>
        <BannerImageHeader src={`http://localhost:3000/assets/NFTImages/NFTBgImage/${nftInfo.nftImage}`}></BannerImageHeader>
        <LogoImgHeader src={`http://localhost:3000/assets/NFTImages/NFTItemImages/${nftInfo.nftLogo}`}></LogoImgHeader>
        <TextInfo heading = {nftName} subheading = {artist} items = {nftItemsDetails} />
        <NftGrids totalNfts = {nftInfo.nfts} imgSrc = {`http://localhost:3000/assets/NFTImages/NFTItemImages/${nftInfo.nftName}`} 
                  nftCollectionName = {nftInfo.nftName} price = {`${nftInfo.floorPrice} ETH`}  
                  buttonText = 'Buy Now'/>
      
    </div>
  )
}

export default NftDetails
