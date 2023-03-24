import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const NFTWallet = () => {
  const [nfts, setNfts] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [iframeActive, setIframeActive] = useState(false); // New state variable

  useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        setWeb3(new Web3(provider));
      } else {
        console.log('Please install MetaMask!');
      }
    })();
  }, []);

  const connectWallet = async () => {
    if (!web3) return;

    const newAccounts = await web3.eth.requestAccounts();
    setAccounts(newAccounts);
    if (newAccounts.length > 0) {
      fetchNFTs(newAccounts[0]);
    }
  };

  const disconnectWallet = () => {
    if (web3 && accounts.length > 0) {
      setAccounts([]);
      setNfts([]);
      setSelectedNFT(null);
    }
  };

  const fetchNFTs = async (walletAddress) => {
    try {
      const contractAddress = '0x6c7a4D5c8f12a87Ac5FF85D10C4502130EF169fa';
      const apiKey = 'f69d4a2c-24cf-4645-957a-640a5323c0b8';
  
      // Fetch the NFT IDs from the API
      const url = `https://cantov.onrender.com/nftwalletOfOwnerId/${contractAddress}/${walletAddress}?api-key=${apiKey}`;
      console.log('Fetching NFT IDs from URL:', url);
      const response = await axios.get(url);
      console.log('Fetched NFT IDs:', response.data);
  
      // Fetch the NFT data for each ID and set it to the state
      const nftsData = await Promise.all(response.data.map(async (nftId) => {
        const nftUrl = `https://raw.githubusercontent.com/ngmisl/cantoverse-nft-json/main/${nftId}.json`;
        console.log('Fetching NFT data from URL:', nftUrl);
        const nftResponse = await axios.get(nftUrl);
        console.log('Fetched NFT data:', nftResponse.data);
        return nftResponse.data;
      }));
      setNfts(nftsData);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    }
  };
  

  const showAnimation = (nft) => {
    console.log('NFT data:', nft.animation_url);
    setSelectedNFT(nft.animation_url);
    setIframeActive(true); // Set iframeActive to true when an image is clicked
  };

  const closeIframe = () => {
    setIframeActive(false); // Close the iframe when the background is clicked
  };
  

  return (
    <Container>
      <Row>
        <Col>
          {!accounts.length ? (
            <Button onClick={connectWallet}>Connect Wallet</Button>
          ) : (
            <>
              <h4>{`Connected: ${accounts[0]}`}</h4>
              <Button variant="danger" onClick={disconnectWallet}>
                Disconnect Wallet
              </Button>
            </>
          )}
        </Col>
      </Row>
      {iframeActive ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
          onClick={closeIframe}
        >
          <iframe
            src={selectedNFT}
            title="NFT Game"
            width="800"
            height="800"
            style={{ border: 'none' }}
          />
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {nfts.map((nft, index) => {
            const key = nft.id ? `nft-${nft.id}` : `nft-${index}`;
            return (
              <Card
                key={key}
                style={{ flexBasis: '30%', margin: '10px' }}
                onClick={() => showAnimation(nft)}
              >
                <Card.Img
                  variant="top"
                  src={nft.image}
                  style={{ width: 400, height: 400 }}
                />
                <Card.Body>
                  <Card.Title>{nft.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </Container>
  );  
};

export default NFTWallet;