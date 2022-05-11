// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./RBFVault.sol";

contract RBFVaultFactory {
    mapping(address => address) public collectionVault;

    function createVault(
        address _collectionAddress,
        address _collectionOwner,
        address _investorAddress,
        int256 _investorShare
    ) external onlyowner {
        address[2] memory parties = [_investorAddress, _collectionOwner];
        int256[2] memory shares = [_investorShare, 100 - _investorShare];
        RBFVault vault = new RBFVault(_collectionAddress, parties, shares);
        collectionVault[_collectionAddress] = address(vault);
    }
}
