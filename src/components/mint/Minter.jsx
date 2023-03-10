import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

import styled from "styled-components";
const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  color: #ffffff;
  background: #1a88f8;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10rem;
  box-shadow: 0 4px 24px -6px #1a88f8;

  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #1a88f8;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #1a88f8;
  }
`;

export function MintNFT() {
  const { config } = usePrepareContractWrite({
    address: '0x570c934ffa07de37a9ec1639bd58f5ffc03494dd',
    abi: [
      {
        name: 'mintNFT',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [{"internalType":"uint256","name":"","type":"uint256"}],
      },
    ],
    functionName: 'mintNFT',
  })
  const { data, write } = useContractWrite(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <div>
      <StyledButton disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? 'Minting...' : 'Mint'}
      </StyledButton>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://polygonscan.com/tx/${data?.hash}`}>Polygonscan</a>
          </div>
        </div>
      )}
    </div>
  )
}