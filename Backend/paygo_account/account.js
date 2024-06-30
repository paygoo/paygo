// const { ethers } = require("ethers");
const { Web3 } = require("web3");
const dotenv = require("dotenv");
// const { tokenAddress, tokenABI } = require("./utils");
// import { Web3 } from 'web3';
// import { tokenAddress, tokenABI } from './utils';

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    // process.env.API,
    // Copy paste the line here from the .env file
  ),
);


exports.createWallet = () => {
//   const wallet = ethers.Wallet.createRandom();

//   const privateKey = wallet.privateKey;
//   const publicKey = wallet.address;
//   const mnemonic = wallet.mnemonic.phrase;

//   console.log('Private Key:', privateKey);
//   console.log('Public Address:', publicKey);
//   console.log('Mnemonic Phrase:', mnemonic);
//   return wallet;  

const account = web3.eth.accounts.create();

  // Extract wallet details
  const privateKey = account.privateKey;
  const publicKey = account.address;

    acc = {
        privateKey: privateKey,
        publicKey: publicKey,
        address: calculateAddressFromPublicKey(publicKey),
    }

  console.log('Private Key:', privateKey);
  console.log('Public Address:', publicKey);

  // Return the account details if needed
  return acc;
};
// wallet = createWallet();


// const provider = new ethers.providers.InfuraProvider('mainnet', 'e62b627b03fb4389ac1cdef15220544d');

// const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);

// const getTokenBalance = async (address) => {
//   try {
//     // Fetch the balance
//     const balance = await tokenContract.balanceOf(address);
    
//     // Fetch the token decimals
//     const decimals = await tokenContract.decimals();
    
//     // Convert the balance to a readable format
//     const formattedBalance = ethers.utils.formatUnits(balance, decimals);
    
//     console.log(`Balance of ${address}: ${formattedBalance} tokens`);
//   } catch (error) {
//     console.error('Error fetching balance:', error);
//   }
// };

// // // Replace with the address you want to check
// const address = '0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb';
// getTokenBalance(address);

// function availableTokens(publicKey) {
//     getTokenBalance(publicKey);
// }

// function getWallet (publicKey) {}



const tokenAddress = '0x4200000000000000000000000000000000000006';
// const tokenABI = [
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "src",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "guy",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "wad",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Approval",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "dst",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "wad",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Deposit",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "src",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "dst",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "wad",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Transfer",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "src",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "wad",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Withdrawal",
//         "type": "event"
//     },
//     {
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "fallback"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             },
//             {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "name": "allowance",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "guy",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "wad",
//                 "type": "uint256"
//             }
//         ],
//         "name": "approve",
//         "outputs": [
//             {
//                 "internalType": "bool",
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "name": "balanceOf",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "decimals",
//         "outputs": [
//             {
//                 "internalType": "uint8",
//                 "name": "",
//                 "type": "uint8"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [],
//         "name": "deposit",
//         "outputs": [],
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "name",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "symbol",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "totalSupply",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "dst",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "wad",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transfer",
//         "outputs": [
//             {
//                 "internalType": "bool",
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "src",
//                 "type": "address"
//             },
//             {
//                 "internalType": "address",
//                 "name": "dst",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "wad",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transferFrom",
//         "outputs": [
//             {
//                 "internalType": "bool",
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "wad",
//                 "type": "uint256"
//             }
//         ],
//         "name": "withdraw",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }
// ];



const tokenHolder = "0x075e72a5eDf65F0A5f44699c7654C1a76941Ddc8";
// const contract = new web3.eth.Contract(tokenABI, tokenAddress);

exports.getTokenBalance =  async (publicKey) => {
    url = 'https://base-sepolia.blockscout.com/api/v2/addresses/'+publicKey;
    try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data.coin_balance);
    weiString = data.coin_balance.toString();
    // console.log(weiString);
    const integerPart = weiString.substring(0, weiString.length - 18);
    const decimalPart = weiString.substring(weiString.length - 18);
    return `${integerPart}.${decimalPart}`.replace(/0+$/, '');
    // return data.coin_balance;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

// (async () => {
//     balance = await getTokenBalance('0x9ec7D4215Fc2917B49A2Ae036c09Fdee14Dee796');
//     console.log(balance);
// })();


const transferTokens = async (fromAddress, toAddress, amount, privateKey) => {
  try {
    // Get token decimals
    // const decimals = await tokenContract.methods.decimals().call();
    const amountInWei = web3.utils.toWei(amount.toString(), 'ether');

    // Get transaction count for nonce
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest');

    // Create transaction object
    const tx = {
      // from: fromAddress,
      to: toAddress,
      nonce: nonce,
      gas: 2000000, // Adjust gas limit as needed
      gasPrice: await web3.eth.getGasPrice(),
      value: amountInWei,
      // data: tokenContract.methods.transfer(toAddress, amountInWei).encodeABI()
    };

    // Sign the transaction
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    // Send the signed transaction
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log('Transaction receipt:', receipt);
  } catch (error) {
    console.error('Error transferring tokens:', error);
  }
};

exports.calculateAddressFromPublicKey = (publicKey) => {
  // Remove the '0x' prefix if present
  if (publicKey.startsWith('0x')) {
    publicKey = publicKey.slice(2);
  }

  // Perform Keccak-256 hash of the public key
  const hash = web3.utils.keccak256(publicKey);

  // Take the last 20 bytes of the hash to get the address
  const address = '0x' + hash.slice(-40); // Take the last 40 characters (20 bytes)

  return address;
};