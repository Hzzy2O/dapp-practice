"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
import Header from "@/components/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { wagmiConfig } from "@/utils/config";
import { ProgressBar } from "./ProgreeBar";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ProgressBar />
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
      <Toaster />
    </>
  );
};

const queryClient = new QueryClient();

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App>{children}</App>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
