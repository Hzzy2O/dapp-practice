"use client";
import { Contract } from "@/utils/contract";
import { notification } from "@/utils/notification";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

export default function Transfer({ contract }: { contract: Contract<"HzToken"> }) {
  const { writeContract, isPending } = useWriteContract();

  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  function tranfer() {
    if (amount === "" || BigInt(amount) <= 0n) {
      notification.error("invalid amount");
      return;
    }
    if (/^0x[a-fA-F0-9]{40}$/.test(address) === false) {
      notification.error("invalid address");
      return;
    }
    writeContract(
      {
        address: contract.address,
        abi: contract.abi,
        functionName: "transfer",
        args: [address as Address, BigInt(amount)],
      },
      {
        onError(err) {
          if (err.message.includes("Ownable")) {
            notification.error("only owner can mint");
          } else {
            notification.error(err.message);
          }
        },
        onSuccess() {
          notification.success("transfer success");
        },
      },
    );
  }

  return (
    <div className="space-y-1 pb-2">
      <h3>Transfer to:</h3>
      <input
        value={address}
        onChange={e => setAddress(e.target.value)}
        type="string"
        placeholder="please input transfer to address"
        className="input mb-2 input-bordered w-full max-w-xs"
      />
      <input
        value={amount}
        onChange={e => setAmount(e.target.value)}
        type="number"
        placeholder="please input transfer amount"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn ml-2" onClick={tranfer}>
        {isPending ? <span className="loading loading-spinner"></span> : "transfer"}
      </button>
    </div>
  );
}
