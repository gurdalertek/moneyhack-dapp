// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/access/Ownable.sol";
import "./RBFVault.sol";

contract RBFVaultFactory {
    event RBFVaultCreated(
        address indexed collectionAddress,
        address indexed vaultAddress
    );

    mapping(address => address) public collectionVault;
    modifier collectionVaultDoesntExist(address _collectionAddress) {
        require(
            _collectionAddress == address(0),
            "Vault for this collection already exist"
        );
        _;
    }

    modifier sharesIsValid(uint256 share) {
        require(share <= 100, "Investor shares can not be more than 100");
        require(share > 0, "Investor shares should be more than 0");
        _;
    }

    modifier isValidAddress(
        address _collectionAddress,
        address _collectionOwner,
        address _investorAddress
    ) {
        require(
            _collectionAddress != address(0),
            "Collection can not be the 0 address"
        );
        require(
            _collectionOwner != address(0),
            "Collection owner can not be the 0 address"
        );

        require(
            _investorAddress != address(0),
            "Investor can not be the 0 address"
        );

        require(
            _collectionOwner != _investorAddress,
            "Collection owner can not be the investor"
        );

        _;
    }

    function createVault(
        address _collectionAddress,
        address _collectionOwner,
        address _investorAddress,
        uint256 _investorShare
    ) external collectionVaultDoesntExist isValidAddress sharesIsValid {
        address[2] memory parties = [_investorAddress, _collectionOwner];
        uint256[2] memory shares = [_investorShare, 100 - _investorShare];
        RBFVault vault = new RBFVault(_collectionAddress, parties, shares);
        collectionVault[_collectionAddress] = address(vault);

        emit RBFVaultCreated(_collectionAddress, address(vault));
    }
}
