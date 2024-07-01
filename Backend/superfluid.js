import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
const dotenv = require("dotenv");
dotenv.config();

async function createFlow(sender, privateKey_sender, receiver, rate) {
  const provider = new ethers.providers.AlchemyProvider(
    "base-sepolia",
    process.env.ALCHEMY
  );

  const sf = await Framework.create({
    chainId: 84532, // Replace with your chain ID
    provider,
  });

  const daix = await sf.loadSuperToken("DAIx");

  // Read example
  const flowInfo = await daix.getFlow({
    sender: sender, // Replace with the sender's address
    receiver: receiver, // Replace with the receiver's address
    providerOrSigner: provider,
  });
  console.log("flowInfo", flowInfo);

  // Write operation example
  const signer = sf.createSigner({
    privateKey: privateKey_sender,
    provider,
  });
  const createFlowOperation = daix.createFlow({
    sender: sender, // Replace with the sender's address
    receiver: receiver, // Replace with the receiver's address
    flowRate: rate, // Replace with the desired flow rate
  });
  const txnResponse = await createFlowOperation.exec(signer);
  const txnReceipt = await txnResponse.wait();
  return txnReceipt;
}

async function convertToSuperToken(privateKey_sender, amount) {
  const provider = new ethers.providers.AlchemyProvider(
    "base-sepolia",
    process.env.ALCHEMY
  );

  const sf = await Framework.create({
    chainId: 84532, // Replace with your chain ID
    provider,
  });
  
  const ethx = await sf.loadSuperToken("ETHx");

  const signer = sf.createSigner({
    privateKey: privateKey_sender,
    provider,
  });

  const upgradeOperation = ethx.upgrade({
    amount: ethers.utils.parseEther(amount), // Amount to upgrade
  });

  const txnResponse = await upgradeOperation.exec(signer);
  const txnReceipt = await txnResponse.wait();
  return txnReceipt;
}

async function sendSuperToken(privateKey_sender, receiver, amount) {
  const provider = new ethers.providers.AlchemyProvider(
    "base-sepolia",
    process.env.ALCHEMY
  );

  const sf = await Framework.create({
    chainId: 84532, // Replace with your chain ID
    provider,
  });

  const ethx = await sf.loadSuperToken("ETHx");

  const signer = sf.createSigner({
    privateKey: privateKey_sender,
    provider,
  });

  const sendOperation = ethx.transfer({
    to: receiver, // Replace with the receiver's address
    amount: ethers.utils.parseEther(amount), // Amount to send
  });

  const txnResponse = await sendOperation.exec(signer);
  const txnReceipt = await txnResponse.wait();
  return txnReceipt;
}

async function loadBalance(address) {
  const provider = new ethers.providers.AlchemyProvider(
    "base-sepolia",
    process.env.ALCHEMY
  );

  const sf = await Framework.create({
    chainId: 84532, // Replace with your chain ID
    provider,
  });

  const ethx = await sf.loadSuperToken("ETHx");
  const balance = await ethx.balanceOf(address);
  return balance;
}

async function loadFlow(sender, receiver) {
    const provider = new ethers.providers.AlchemyProvider(
        "base-sepolia",
        process.env.ALCHEMY
    );
    
    const sf = await Framework.create({
        chainId: 84532, // Replace with your chain ID
        provider,
    });
    
    const ethx = await sf.loadSuperToken("ETHx");
    
    const flowInfo = await ethx.getFlow({
      sender: sender, // Replace with the sender's address
      receiver: receiver, // Replace with the receiver's address
      providerOrSigner: provider,
    });
    return flowInfo;
}

async function loadNetFlow(sender){
    const provider = new ethers.providers.AlchemyProvider(
        "base-sepolia",
        process.env.ALCHEMY
    );
    
    const sf = await Framework.create({
        chainId: 84532, // Replace with your chain ID
        provider,
    });
    
    const ethx = await sf.loadSuperToken("ETHx");
    
    const netFlow = await ethx.getNetFlow({
      account: sender, // Replace with the account address
      token: ethx,
      providerOrSigner: provider,
    });
    return netFlow;
}