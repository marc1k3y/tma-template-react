import { TonConnectUIContext, useTonWallet } from '@tonconnect/ui-react';
import { useContext } from 'react';
import { paymentRequest } from './request-payment';

export const WalletElement = () => {
  const wallet = useTonWallet();
  const tonConnectUI = useContext(TonConnectUIContext);

  const requestPaymentVip = () => {
    if (tonConnectUI) {
      tonConnectUI
        .sendTransaction(paymentRequest)
        .then((transactionResult) => {
          console.log('Transaction successful:', transactionResult);
        })
        .catch((error) => {
          console.error('Transaction failed:', error);
        });
    } else {
      alert(`Wallet is not connected `);
    }
  }

  return (
    wallet && (
      <div>
        <span>Connected wallet: {JSON.stringify(wallet)}</span>
        <span>Device: {wallet.device.appName}</span>
        <button onClick={requestPaymentVip}>payment vip</button>
      </div>
    )
  );
};