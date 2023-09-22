// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract HulkToken is ERC20 {
    constructor() ERC20("Hulk Token", "HT") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}
