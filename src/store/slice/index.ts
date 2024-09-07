import { createSlice } from "@reduxjs/toolkit";
import { ISelectItemOptions } from "../../types";

const initialState: ISelectItemOptions = {
  selectName: "",
  isOpenMobileSelector: false,
};

const selectLocationSlice = createSlice({
  name: "selectLocation",
  initialState,
  reducers: {
    toggleMobileSelector(state, action) {
      state.isOpenMobileSelector = !state.isOpenMobileSelector;
    },
    setSelectName(state, action) {
      state.selectName = action.payload;
    },
  },
});

export const { toggleMobileSelector, setSelectName } = selectLocationSlice.actions;
export const selectLocationSliceReducer = selectLocationSlice.reducer;
