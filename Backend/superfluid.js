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
