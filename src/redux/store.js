import { configureStore } from '@reduxjs/toolkit';
import continentsReducer from '../features/countries/continentsSlice';
import countryReducer from '../features/countries/country/country.Slice';
import countryDetailsReducer from '../features/countries/countryDetails/countryDetailsSlice';

const store = configureStore({
  reducer: {
    continents: continentsReducer,
    countries: countryReducer,
    countryDetails: countryDetailsReducer,
  },
});

export default store;
