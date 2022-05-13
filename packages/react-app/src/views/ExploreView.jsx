import React from "react";
import { useSelector } from "react-redux";

import { activeNftProjectsSelector } from "../stores";
import NFTProjectCard from "../components/NFTProject/NFTProjectCard";

const ExploreView = () => {
  const activeNftProjects = useSelector(activeNftProjectsSelector);

  return <NFTProjectCard nftProject={activeNftProjects[0]} />;
};

export default ExploreView;
