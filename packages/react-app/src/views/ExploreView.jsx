import React from "react";
import { useSelector } from "react-redux";

import { activeNftProjectsSelector } from "../stores";
import NFTProjectCardsList from "../components/NFTProject/NFTProjectCardsList";

const ExploreView = () => {
  const activeNftProjects = useSelector(activeNftProjectsSelector);

  return <NFTProjectCardsList nftProjects={activeNftProjects} />;
};

export default ExploreView;
