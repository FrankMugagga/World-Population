import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getContinents = createAsyncThunk('continents/getContinents', async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  const regions = {};
  let worldPopulation = 0;

  data.forEach((country) => {
    const { region } = country;

    if (region !== undefined && region !== '') {
      const { population } = country;

      if (population !== undefined) {
        if (regions[region] === undefined) {
          regions[region] = {
            population,
          };
        } else {
          regions[region].population += population;
        }

        worldPopulation += population;
      }
    }
  });

  // Extract the unique regions
  const uniqueRegions = Object.keys(regions);

  return {
    uniqueRegions,
    regionsPopulation: regions,
    worldPopulation,
  };
});

const continentMaps = {
  Africa: 'https://svgsilh.com/svg/28615.svg',
  Asia: 'https://svgsilh.com/svg/151642.svg',
  Europe: 'https://svgsilh.com/svg/151588.svg',
  Oceania: 'https://svgsilh.com/svg/151644.svg',
  Americas: 'https://svgsilh.com/svg/307195.svg',
  Antarctic: 'https://svgsilh.com/svg/311014.svg',
};

const initialState = {
  continent: [],
  loading: 'idle',
  error: '',
};

const continentsSlice = createSlice({
  name: 'continents',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContinents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContinents.fulfilled, (state, action) => {
        state.loading = false;
        state.continent = action.payload.uniqueRegions.map((region) => ({
          name: region,
          population: action.payload.regionsPopulation[region].population,
          mapUrl: continentMaps[region],
        }));
        state.worldPopulation = action.payload.worldPopulation;
      })
      .addCase(getContinents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default continentsSlice.reducer;
