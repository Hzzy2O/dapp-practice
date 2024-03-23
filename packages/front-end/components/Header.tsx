import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-base-100 navbar shadow-md">
      <div className="navbar-start">
        <div className="pl-5 breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
}
