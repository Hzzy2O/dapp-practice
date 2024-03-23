import { useGlobalState } from "@/store/store";
import { chainConfig } from "@/utils/config";
import { Chain } from "viem";
import { useChainId } from "wagmi";

export function useTargetNetwork(): { targetNetwork: Chain } {
  const chainId = useChainId();
  const targetNetwork = useGlobalState(({ targetNetwork }) => targetNetwork);
  const setTargetNetwork = useGlobalState(({ setTargetNetwork }) => setTargetNetwork);

  useEffect(() => {
    const newSelectedNetwork = chainConfig.targetNetworks.find(targetNetwork => targetNetwork.id === chainId);
    if (newSelectedNetwork && newSelectedNetwork.id !== targetNetwork.id) {
      setTargetNetwork(newSelectedNetwork);
    }
  }, [chainId, setTargetNetwork, targetNetwork.id]);

  return {
    targetNetwork,
  };
}
