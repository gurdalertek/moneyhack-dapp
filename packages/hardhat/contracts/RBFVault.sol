// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";

interface ICollectionContract {
    function transferOwnership(address newOwner) external;
}

contract RBFVault is PaymentSplitter {
    address public collectionOwner;
    address public collectionAddress;

    constructor(
        address _collectionAddress,
        address[2] _parties,
        uint256[2] _shares
    ) PaymentSplitter(_parties, _shares) {
        collectionAddress = _collectionAddress;
        collectionOwner = _parties[1];
    }

    function returnOwnershipToCollectionOwner() external {
        ICollectionContract(collectionAddress).transferOwnership(
            collectionOwner
        );
    }
}
