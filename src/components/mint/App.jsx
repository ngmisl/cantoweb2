import { ConnectKitButton } from 'connectkit';
import React from 'react';
import { MintNFT } from './Minter';
import { useAccount } from 'wagmi'
import TotalSupply from './Totalmints';

export function App() {
  const { isConnected } = useAccount()
  if (isConnected) {
    return (
      <div>
        <div><ConnectKitButton/> </div>
        <div><MintNFT /></div>
        <div><TotalSupply /></div>
      </div>
    )
  }
  return <div><ConnectKitButton/></div>
  }