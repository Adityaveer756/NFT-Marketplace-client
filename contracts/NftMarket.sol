// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftMarket is ERC721, Ownable {

    address payable private marketOwner;
    string internal baseTokenUri;
    uint private totalMintedNfts;
    uint private mintPrice;
    uint private listPrice;
    mapping( address => mapping(uint => bool) ) public isListed;
    
    constructor(string memory uri) ERC721("NFT-Market","NM"){
        marketOwner = payable(owner());
        baseTokenUri = uri;
        totalMintedNfts = 0;
        mintPrice = 0.00001 ether;
    }

    function setMintPrice (uint _price) external onlyOwner{
        mintPrice = _price;
    }
    
    function tokenURI(uint tokenId_) public view override returns(string memory){
        require(_exists(tokenId_), "Token does not exist!");
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

    function payListPrice() external payable {
        require(msg.value == listPrice, 'wrong list price');
        marketOwner.transfer(msg.value);
    }

    function mint() external payable {
        if( msg.sender != marketOwner ){
            require(msg.value == mintPrice, "wrong mint value");
        }
        
        totalMintedNfts++;
        uint tokenId = totalMintedNfts;
        _safeMint(msg.sender, tokenId);
        isListed[msg.sender][tokenId] = true;
    }

    function unList(uint _tokenId) external {
        require(_exists(_tokenId), "Token does not exist!");
        isListed[msg.sender][_tokenId]= true;
    }

}