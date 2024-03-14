// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "./IERC20.sol";

contract ERC20 is IERC20 {
	uint private _totalSupply;

	string public name;
	string public symbol;

	mapping(address => uint) private _balances;
	mapping(address => mapping(address => uint)) private _allowances;

	constructor(string memory name_, string memory symbol_) {
		name = name_;
		symbol = symbol_;
	}

	function totalSupply() public view override returns (uint256) {
		return _totalSupply;
	}

	function balanceOf(address account) public view override returns (uint256) {
		return _balances[account];
	}

	function transfer(
		address to,
		uint256 amount
	) public override returns (bool) {
		require(to != address(0), "ERC20: zero address");
		require(to != msg.sender, "ERC20: transfer to the caller");
		require(_balances[msg.sender] >= amount, "ERC20: infufficient balance");
		_balances[msg.sender] -= amount;
		_balances[to] += amount;

		return true;
	}

	function transferFrom(
		address from,
		address spender,
		uint256 amount
	) public override returns (bool) {
		require(
			from != address(0) && spender != address(0),
			"ERC20: zero address"
		);
		require(_balances[from] >= amount, "ERC20: insufficient balance");
		require(
			_allowances[from][spender] >= amount,
			"ERC20: insufficient allowance"
		);

		_balances[from] -= amount;
		_balances[spender] += amount;
		_allowances[from][spender] -= amount;

		return true;
	}

	function allowance(
		address owner,
		address spender
	) public view override returns (uint256) {
		return _allowances[owner][spender];
	}

	function approve(
		address spender,
		uint256 amount
	) public override returns (bool) {
		require(spender != address(0), "ERC20: zero address");
		require(msg.sender != spender, "ERC20: approve to the caller");
		_allowances[msg.sender][spender] = amount;
		return true;
	}

	function _mint(address to, uint256 amount) internal {
		_totalSupply += amount;
		_balances[to] += amount;
	}

	function _burn(uint256 amount) internal {
		require(_balances[msg.sender] >= amount, "ERC20: insufficient balance");

		_balances[msg.sender] -= amount;
		_totalSupply -= amount;
	}
}
