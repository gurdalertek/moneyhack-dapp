import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import _ from "lodash";

import nftReducer, { nftProjectsSelector } from "./reducers/nft";

const combinedReducer = combineReducers({
  nft: nftReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
    middleware: [],
  });

export const store = makeStore();

// Selectors ================================================================

export const activeNftProjectsSelector = createSelector(nftProjectsSelector, projects => {
  return _.sortBy(
    _.filter(projects, obj => obj?.isActive),
    "title",
  );
});
