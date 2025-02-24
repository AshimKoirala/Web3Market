import { useState } from 'react';
import { useAccount, useConnect, useSigner } from 'wagmi';

export default function ReceivePayment() {
  const { isConnected } = useAccount();
  const { signer } = useSigner();
  const { connect, connectors } = useConnect();
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePayment = async () => {
    if (!isConnected || !signer) return;

    // Logic to send payment via smart contract or Web3 API
    console.log(`Sending ${amount} ETH to creator's wallet`);
    // Example: await signer.sendTransaction({ to: 'creator_address', value: ethers.utils.parseEther(amount) });
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Pay for Work</h1>
      {!isConnected ? (
        <div className="text-center mt-4">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect(connector)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl mb-4"
            >
              Connect Wallet
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <label htmlFor="amount" className="block text-lg font-semibold">Amount (ETH)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="border border-gray-300 p-2 rounded-xl mt-2 w-full"
            value={amount}
            onChange={handleAmountChange}
          />
          <button
            onClick={handlePayment}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl w-full"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}
