import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  reducer: {},
});

export default countriesSlice.reducer;
