import Link from "next/link";

export default function Page() {
  return (
    <div className="note--empty-state">
      <div className="flex-grow bg-base-300 h-auto w-full pt-50 py-12 min-h-[calc(100vh-64px)]">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <p>
              <span className="icon-[ic--twotone-generating-tokens] w-10 h-10"></span>
            </p>
            <Link href="/erc20" passHref className="link">
              ERC20 demo.
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
