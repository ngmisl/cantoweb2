import React from 'react';
import { useContractRead } from 'wagmi';

const contractABI = [
  {
    "inputs": [],
    "name": "",
    "outputs": [{"internalType":"string","name":"","type":"string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
];

const contractAddress = "0x570c934ffa07de37a9ec1639bd58f5ffc03494dd"


function TotalSupply() {
  const { data, isError, isLoading } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: 'totalSupply',
    chainId: 137,
  })
  return <div>Total Supply: {TotalSupply}</div>
}

export default TotalSupply;
