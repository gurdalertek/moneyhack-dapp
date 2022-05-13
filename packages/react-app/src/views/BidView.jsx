import React from "react";
import { useSelector } from "react-redux";

import { nftSelectedProjectSelector } from "../stores/reducers/nft";
import NFTProjectCard from "../components/NFTProject/NFTProjectCard";

const BidView = () => {
  const selectedNftProjects = useSelector(nftSelectedProjectSelector);

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul
      role="list"
      class="mx-10 my-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <NFTProjectCard nftProject={selectedNftProjects} />{" "}
    </ul>
  );
};

export default BidView;
