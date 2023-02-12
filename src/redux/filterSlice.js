import { createSlice } from '@reduxjs/toolkit';
// import { statusFilter } from './constants';

const initialState = {
  status: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
