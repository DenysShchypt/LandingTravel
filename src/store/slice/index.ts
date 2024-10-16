import { createSlice } from '@reduxjs/toolkit'
import { ISelectItemOptions } from '../../types'

const initialState: ISelectItemOptions = {
  selectName: '',
  isOpenMobileSelector: false,
}

const selectLocationSlice = createSlice({
  name: 'selectLocation',
  initialState,
  reducers: {
    openMobileSelector(state, action) {
      state.selectName = action.payload.selectName
      state.isOpenMobileSelector = action.payload.isOpenMobileSelector
    },
    closeMobileSelector() {
      return initialState
    },
  },
})

export const { openMobileSelector, closeMobileSelector } =
  selectLocationSlice.actions
export const selectLocationSliceReducer = selectLocationSlice.reducer
