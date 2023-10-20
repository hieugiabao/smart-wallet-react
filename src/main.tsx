import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  localWallet,
  metamaskWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Goerli, Mumbai } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
export const activeChain = Mumbai;

export const smartWalletConfig = {
  factoryAddress: "0x733416c6714dbd8caab4a219213717a13022e586",
  gasless: true,
};

export const editionDropAddress = "0xD3868a637ff2ebdFF4Cbb2f9d5Ea12C6C3DB6480";
export const editionDropTokenId = "0";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[smartWallet(metamaskWallet(), smartWalletConfig), smartWallet(localWallet(), smartWalletConfig)]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
