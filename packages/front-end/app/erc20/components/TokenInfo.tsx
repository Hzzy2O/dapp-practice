import { Contract } from "@/utils/contract";
import { useReadContract } from "wagmi";

export default function TokenInfo({ contract }: { contract: Contract<"HzToken"> }) {
  const { data: tokenName } = useReadContract({
    address: contract.address,
    functionName: "name",
    abi: contract.abi,
  });

  return (
    <div className="space-y-1 pb-2">
      <h3 className="font-medium text-lg mb-0 break-all">token name:</h3>
      <div>{tokenName}</div>
    </div>
  );
}
