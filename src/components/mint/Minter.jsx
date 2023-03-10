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
    address: '0x4094541DfBF0A24f10A9597832856b09005Cb094',
    abi: [
      {
        name: 'safeMint',
        type: 'function',
        stateMutability: 'payable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: 'safeMint',
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
            <a href={`https://testnet.tuber.build/tx/${data?.hash}`}>Canto Testnet</a>
          </div>
        </div>
      )}
    </div>
  )
}