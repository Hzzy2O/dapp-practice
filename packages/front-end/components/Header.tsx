import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <div className="bg-base-100 navbar shadow-md">
      <div className="navbar-start"></div>
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
}
