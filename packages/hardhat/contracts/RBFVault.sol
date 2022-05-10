// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/access/Ownable.sol";

interface ICollectionContract {
    function transferOwnership(address newOwner) external;
}

contract RBFVault {
    address public collectionOwner;
    address public collectionAddress;

    constructor(address _collectionAddress, address _collectionOwner) {
        collectionAddress = _collectionAddress;
        collectionOwner = _collectionOwner;
    }

    function returnOwnershipToCollectionOwner() external {
        ICollectionContract(collectionAddress).transferOwnership(collectionOwner);
    }
}
