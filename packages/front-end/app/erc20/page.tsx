"use client";

import { useDeployedContractInfo } from "@/hooks/useDeployedContract";
import TokenInfo from "./components/TokenInfo";
import Mint from "./components/Mint";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";

export default function ERC20() {
  const { data: contractData } = useDeployedContractInfo("HzToken");

  if (!contractData) {
    return null;
  }

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0 pt-10`}>
      <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div className="col-span-1 flex flex-col">
          <div className="bg-base-300 rounded-3xl px-6 lg:px-8 py-4 shadow-lg shadow-base-300">
            <TokenInfo contract={contractData} />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          <div className="z-10">
            <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col relative">
              <div className="p-5">
                <Mint contract={contractData} />
                <Balance contract={contractData} />
                <Transfer contract={contractData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
