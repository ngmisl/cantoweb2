import { ConnectKitButton } from 'connectkit';
import React from 'react';
import { MintNFT } from './Minter';
import { useAccount } from 'wagmi'

export function App() {
  const { isConnected } = useAccount()
  if (isConnected) {
    return (
      <div>
        <div><ConnectKitButton/> </div>
        <div><MintNFT /></div>
      </div>
    )
  }
  return <div><ConnectKitButton/></div>
  }