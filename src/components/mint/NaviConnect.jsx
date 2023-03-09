import React from 'react';
import { WagmiConfig, createClient } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { App } from './App';



const client = createClient(
  getDefaultClient({
    appName: 'MintWorld Connector',
    chains: [polygon],
  })
);

function NaviConnect() {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="auto">
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
    );
}

export default NaviConnect;
