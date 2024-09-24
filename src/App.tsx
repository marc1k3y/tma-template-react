import { ConnectWalletElement } from "./ui/ton/Connect";
import { WalletElement } from "./ui/ton/Wallet";

export default function App() {
  return (
    <div>
      <ConnectWalletElement />
      <WalletElement />
    </div>
  );
}
