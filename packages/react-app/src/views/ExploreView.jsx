import React from "react";
import NFTProjectCard from "../components/NFTProject/NFTProjectCard";

const ExploreView = () => {
  const nftProject = {
    imageSrc:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  };

  return <NFTProjectCard nftProject={nftProject} />;
};

export default ExploreView;
