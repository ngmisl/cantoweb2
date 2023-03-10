export const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',

        name: '_maxSupply',

        type: 'uint256',
      },
    ],

    stateMutability: 'nonpayable',

    type: 'constructor',
  },

  {
    anonymous: false,

    inputs: [
      {
        indexed: true,

        internalType: 'address',

        name: 'owner',

        type: 'address',
      },

      {
        indexed: true,

        internalType: 'address',

        name: 'approved',

        type: 'address',
      },

      {
        indexed: true,

        internalType: 'uint256',

        name: 'tokenId',

        type: 'uint256',
      },
    ],

    name: 'Approval',

    type: 'event',
  },

  {
    anonymous: false,

    inputs: [
      {
        indexed: true,

        internalType: 'address',

        name: 'owner',

        type: 'address',
      },

      {
        indexed: true,

        internalType: 'address',

        name: 'operator',

        type: 'address',
      },

      {
        indexed: false,

        internalType: 'bool',

        name: 'approved',

        type: 'bool',
      },
    ],

    name: 'ApprovalForAll',

    type: 'event',
  },

  {
    anonymous: false,

    inputs: [
      {
        indexed: true,

        internalType: 'address',

        name: 'previousOwner',

        type: 'address',
      },

      {
        indexed: true,

        internalType: 'address',

        name: 'newOwner',

        type: 'address',
      },
    ],

    name: 'OwnershipTransferred',

    type: 'event',
  },

  {
    anonymous: false,

    inputs: [
      {
        indexed: true,

        internalType: 'address',

        name: 'from',

        type: 'address',
      },

      {
        indexed: true,

        internalType: 'address',

        name: 'to',

        type: 'address',
      },

      {
        indexed: true,

        internalType: 'uint256',

        name: 'tokenId',

        type: 'uint256',
      },
    ],

    name: 'Transfer',

    type: 'event',
  },

  {
    stateMutability: 'payable',

    type: 'fallback',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: '_tokenId',

        type: 'uint256',
      },
    ],

    name: 'accessAddressPerTokenId',

    outputs: [
      {
        internalType: 'address[]',

        name: 'addresses',

        type: 'address[]',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'to',

        type: 'address',
      },

      {
        internalType: 'uint256',

        name: 'tokenId',

        type: 'uint256',
      },
    ],

    name: 'approve',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'owner',

        type: 'address',
      },
    ],

    name: 'balanceOf',

    outputs: [
      {
        internalType: 'uint256',

        name: '',

        type: 'uint256',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'addr',

        type: 'address',
      },
    ],

    name: 'checkAccess',

    outputs: [
      {
        internalType: 'bool',

        name: 'val',

        type: 'bool',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: '_tokenId',

        type: 'uint256',
      },
    ],

    name: 'checkLengh',

    outputs: [
      {
        internalType: 'uint256',

        name: '',

        type: 'uint256',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: 'tokenId',

        type: 'uint256',
      },
    ],

    name: 'getApproved',

    outputs: [
      {
        internalType: 'address',

        name: '',

        type: 'address',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: '_tokenId',

        type: 'uint256',
      },

      {
        internalType: 'address',

        name: 'addr',

        type: 'address',
      },
    ],

    name: 'giveAccess',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'owner',

        type: 'address',
      },

      {
        internalType: 'address',

        name: 'operator',

        type: 'address',
      },
    ],

    name: 'isApprovedForAll',

    outputs: [
      {
        internalType: 'bool',

        name: '',

        type: 'bool',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [],

    name: 'maxSupply',

    outputs: [
      {
        internalType: 'uint256',

        name: '',

        type: 'uint256',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [],

    name: 'mintActive',

    outputs: [
      {
        internalType: 'bool',

        name: '',

        type: 'bool',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: '',

        type: 'address',
      },
    ],

    name: 'minted',

    outputs: [
      {
        internalType: 'bool',

        name: '',

        type: 'bool',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [],

    name: 'name',

    outputs: [
      {
        internalType: 'string',

        name: '',

        type: 'string',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [],

    name: 'owner',

    outputs: [
      {
        internalType: 'address',

        name: '',

        type: 'address',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: 'tokenId',

        type: 'uint256',
      },
    ],

    name: 'ownerOf',

    outputs: [
      {
        internalType: 'address',

        name: '',

        type: 'address',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: '_tokenId',

        type: 'uint256',
      },

      {
        internalType: 'address',

        name: 'addr',

        type: 'address',
      },
    ],

    name: 'removeAccess',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: '_tokenId',

        type: 'uint256',
      },
    ],

    name: 'removeAccessForAllOfTokenId',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [],

    name: 'renounceOwnership',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: '_tokenId',

        type: 'uint256',
      },

      {
        internalType: 'uint256',

        name: '_salePrice',

        type: 'uint256',
      },
    ],

    name: 'royaltyInfo',

    outputs: [
      {
        internalType: 'address',

        name: '',

        type: 'address',
      },

      {
        internalType: 'uint256',

        name: '',

        type: 'uint256',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [],

    name: 'safeMint',

    outputs: [
      {
        internalType: 'uint256',

        name: '',

        type: 'uint256',
      },
    ],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'from',

        type: 'address',
      },

      {
        internalType: 'address',

        name: 'to',

        type: 'address',
      },

      {
        internalType: 'uint256',

        name: 'tokenId',

        type: 'uint256',
      },
    ],

    name: 'safeTransferFrom',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'from',

        type: 'address',
      },

      {
        internalType: 'address',

        name: 'to',

        type: 'address',
      },

      {
        internalType: 'uint256',

        name: 'tokenId',

        type: 'uint256',
      },

      {
        internalType: 'bytes',

        name: 'data',

        type: 'bytes',
      },
    ],

    name: 'safeTransferFrom',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'operator',

        type: 'address',
      },

      {
        internalType: 'bool',

        name: 'approved',

        type: 'bool',
      },
    ],

    name: 'setApprovalForAll',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'receiver',

        type: 'address',
      },

      {
        internalType: 'uint96',

        name: 'feeNumerator',

        type: 'uint96',
      },
    ],

    name: 'setFeeNum',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'bool',

        name: '_mintActive',

        type: 'bool',
      },
    ],

    name: 'setMintState',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'string',

        name: '_uri',

        type: 'string',
      },
    ],

    name: 'setURI',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'bytes4',

        name: 'interfaceId',

        type: 'bytes4',
      },
    ],

    name: 'supportsInterface',

    outputs: [
      {
        internalType: 'bool',

        name: '',

        type: 'bool',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [],

    name: 'symbol',

    outputs: [
      {
        internalType: 'string',

        name: '',

        type: 'string',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [],

    name: 'teamMint',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'uint256',

        name: 'id',

        type: 'uint256',
      },
    ],

    name: 'tokenURI',

    outputs: [
      {
        internalType: 'string',

        name: '',

        type: 'string',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [],

    name: 'totalSupply',

    outputs: [
      {
        internalType: 'uint256',

        name: '',

        type: 'uint256',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'from',

        type: 'address',
      },

      {
        internalType: 'address',

        name: 'to',

        type: 'address',
      },

      {
        internalType: 'uint256',

        name: 'tokenId',

        type: 'uint256',
      },
    ],

    name: 'transferFrom',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: 'newOwner',

        type: 'address',
      },
    ],

    name: 'transferOwnership',

    outputs: [],

    stateMutability: 'nonpayable',

    type: 'function',
  },

  {
    inputs: [],

    name: 'uri',

    outputs: [
      {
        internalType: 'string',

        name: '',

        type: 'string',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    inputs: [
      {
        internalType: 'address',

        name: '_owner',

        type: 'address',
      },
    ],

    name: 'walletOfOwner',

    outputs: [
      {
        internalType: 'uint256[]',

        name: '',

        type: 'uint256[]',
      },
    ],

    stateMutability: 'view',

    type: 'function',
  },

  {
    stateMutability: 'payable',

    type: 'receive',
  },
];
export const NFT_CONTRACT_ADDRESS = '0x87a3c277Ebf880e28F7eb57fD94b72Bd51f65784';
