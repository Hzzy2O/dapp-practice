import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import { hardhat, sepolia, mainnet, arbitrum } from "wagmi/chains";

const chains = [hardhat, sepolia, arbitrum, mainnet] as const;

export const wagmiConfig = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: chains,
  ssr: true,
});

export const chainConfig = {
  targetNetworks: chains,
};
