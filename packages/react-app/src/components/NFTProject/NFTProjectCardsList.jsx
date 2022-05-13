import React from "react";

import NFTProjectCard from "./NFTProjectCard";

const NFTProjectCardsList = ({ nftProjects }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul
      role="list"
      class="mx-10 my-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {nftProjects.map(project => (
        <NFTProjectCard nftProject={project} />
      ))}
    </ul>
  );
};

export default NFTProjectCardsList;
