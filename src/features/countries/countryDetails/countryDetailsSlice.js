import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  countryDetail: [],
  loading: false,
  error: '',
};
export const getDetails = createAsyncThunk('countryDetails/getDetails', async (code) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data = await response.json();
  return data;
});

const countryDetailsSlice = createSlice({
  name: 'countryDetails',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.countryDetail = action.payload;
      })
      .addCase(getDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countryDetailsSlice.reducer;
