import React from 'react';
import { WagmiConfig, createClient } from 'wagmi';
import { cantotest } from './CantoTestnet';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { App } from './App';

const chains = [cantotest];

const client = createClient(
  getDefaultClient({
    appName: 'MintWorld Connector',
    chains: chains,
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
