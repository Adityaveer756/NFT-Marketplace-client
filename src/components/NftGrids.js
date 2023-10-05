import React from 'react'

const NftGrids = (props) => {
  return (
    <>
      <div className='nft-items-section'>
            <div className='nft-item-grid' >
            {props.totalNfts.map((item,index) => (
                <div key={index} className='nft-item-grid-container'>
                    <img className='nft-item-grid-img' src={`${props.imgSrc}/${item}`}/>
                    <div className='nft-item-grid-details'>
                      <h3>{`${props.nftCollectionName} #${item.replace('.avif','')}`}</h3>
                      <h4>{props.price}</h4>
                    </div>
                    <button className='nft-item-grid-button'>{props.buttonText}</button>
                </div>

            ))}
            </div>
        </div>
    </>
  )
}

export default NftGrids