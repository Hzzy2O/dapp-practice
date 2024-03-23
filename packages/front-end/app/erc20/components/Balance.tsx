"use client";
import { Contract } from "@/utils/contract";
import { Address } from "viem";
import { useReadContract } from "wagmi";

export default function Balance({ contract }: { contract: Contract<"HzToken"> }) {
  const [address, setAddress] = useState<string>("0x");
  const [balance, setBalance] = useState<string | null | undefined>(null);

  const { refetch } = useReadContract({
    address: contract.address,
    functionName: "balanceOf",
    abi: contract.abi,
    args: [address as Address],
  });

  const query = async () => {
    const { data } = await refetch();
    setBalance(data?.toString());
  };

  return (
    <div>
      <h3>get balanceOf:</h3>
      <input
        value={address}
        onChange={e => setAddress(e.target.value)}
        type="text"
        placeholder="please input address"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn ml-2" onClick={query}>
        query
      </button>
      <div className="mt-2 flex-grow w-4/5">
        {balance !== null && balance !== undefined && (
          <div className="bg-secondary rounded-3xl text-sm px-4 py-1.5 break-words">
            <p className="font-bold m-0 mb-1">Result:</p>
            <pre className="whitespace-pre-wrap break-words">{balance.toString()}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
