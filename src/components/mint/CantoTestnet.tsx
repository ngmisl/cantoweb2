import { Chain } from 'wagmi'

export const cantotest = {
 id: 7701,
 name: 'Canto Testnet',
 network: 'Canto Testnet',
 nativeCurrency: {
 decimals: 18,
 name: 'CANTO TEST',
 symbol: 'CANTOT',
 },
 rpcUrls: {
 public: { http: ['https://canto-testnet.plexnode.wtf'] },
 default: { http: ['https://canto-testnet.plexnode.wtf'] },
 },
 blockExplorers: {
 etherscan: { name: 'Canto Testnet Scan', url: 'https://testnet.tuber.build' },
 default: { name: 'Canto Testnet Scan', url: 'https://testnet.tuber.build' },
 },
} as const satisfies Chain
