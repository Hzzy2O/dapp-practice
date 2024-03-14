// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "./ERC20.sol";

contract HzToken is ERC20 {
	address private owner = msg.sender;

	constructor(uint256 _initSupply) ERC20("HzToken", "HZ") {
		_mint(msg.sender, _initSupply);
	}

	modifier onlyOwner() {
		require(msg.sender == owner, "Ownable: not the owner");
		_;
	}

	function mint(address to, uint256 amount) public onlyOwner {
		_mint(to, amount);
	}

	function burn(uint256 amount) public {
		_burn(amount);
	}
}
