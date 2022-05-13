import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      title: "NFT01",
      imageSrc:
        "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
      description: "NFT01 description",
      isActive: true,
    },
  ],
};

const slice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    projectsUpdatedAction: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { projectsUpdatedAction } = slice.actions;

export const nftStateSelector = state => state.nft;
export const nftProjectsSelector = state => state.nft.projects;

export default slice.reducer;
