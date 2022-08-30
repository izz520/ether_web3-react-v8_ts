import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { ReactNode } from "react";
import { hooks as metaMaskHooks, metaMask } from "./connector";

const connectors: [MetaMask, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks]
]
const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      {children}
    </Web3ReactProvider>
  )
}

export default Web3Provider;