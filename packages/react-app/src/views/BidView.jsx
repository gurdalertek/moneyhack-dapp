import React, { useState } from "react";
import { useSelector } from "react-redux";

import { nftSelectedProjectSelector } from "../stores/reducers/nft";
import NFTProjectCardsList from "../components/NFTProject/NFTProjectCardsList";
import SecondaryButton from "../components/Buttons/SecondaryButton";

const BidView = () => {
  const selectedNftProject = useSelector(nftSelectedProjectSelector);

  const [bidAmount, setBidAmount] = useState(1000000);

  return (
    <div>
      <NFTProjectCardsList nftProjects={[selectedNftProject]} />
      <SecondaryButton onClick={() => {}} children={"BID " + bidAmount + " DAI"}></SecondaryButton>
    </div>
  );
};

export default BidView;
