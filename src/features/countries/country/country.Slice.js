import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/* export const getCountry = createAsyncThunk('country/getCountry', async () => {
  const response = await fetch('https://restcountries.com/v3.1/region/europe');
  const data = await response.json();
  return data;
}); */

export const getCountry = createAsyncThunk('country/getCountry', async (continent) => {
  const response = await fetch(`https://restcountries.com/v3.1/region/${continent}`);
  const data = await response.json();
  return data;
});

const initialState = {
  country: [],
  loading: false,
  error: '',
};

const countrySlice = createSlice({
  name: 'country',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.country = action.payload;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
