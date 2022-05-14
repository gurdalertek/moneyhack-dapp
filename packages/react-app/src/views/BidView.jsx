import React, { useState } from "react";
import { useSelector } from "react-redux";

import { DEFAULT_EST_ANN_REVENUE } from "../constants";
import { nftSelectedProjectSelector } from "../stores/reducers/nft";
import NFTProjectCardsList from "../components/NFTProject/NFTProjectCardsList";
import NFTProjectCard from "../components/NFTProject/NFTProjectCard";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import PercentageSlider from "../components/Inputs/PercentageSlider";

const BidView = () => {
  const selectedNftProject = useSelector(nftSelectedProjectSelector);
  const [bidAmount, setBidAmount] = useState(selectedNftProject?.estAnnualizedRevenue || DEFAULT_EST_ANN_REVENUE);

  const onSliderValueChange = value => {
    setBidAmount((value / 100) * (selectedNftProject?.estAnnualizedRevenue || DEFAULT_EST_ANN_REVENUE));
  };

  return (
    <div class="mx-10 my-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <NFTProjectCard nftProject={selectedNftProject} />
      <div class="relative">
        <div class="h-full bg-white">
          <div class="my-10">
            <PercentageSlider onChange={onSliderValueChange} />
          </div>
          <div class="my-10">
            <SecondaryButton onClick={() => {}} children={"BID " + bidAmount + " DAI"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidView;
