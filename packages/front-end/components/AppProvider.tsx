"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Toaster } from "react-hot-toast";
import { WagmiProvider, createConfig, http } from "wagmi";
import Header from "@/components/Header";
import { localhost } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
      <Toaster />
    </>
  );
};

const wagmiConfig = createConfig({
  chains: [localhost],
  transports: {
    [localhost.id]: http("http://localhost:8545"),
  },
});

const queryClient = new QueryClient();

export default function AppProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // setMounted(true);
  }, []);

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
