import { configureStore } from '@reduxjs/toolkit';
import contriesSlice from './slices/countriesSlice'
import categoryCountriesSlice from './slices/categoryContriesSlice'
import countrySlice from './slices/countrySlice';
import darkModeSlice from './slices/darkModeSlice'

const store = configureStore({
  reducer: {
    countries: contriesSlice,
    country: countrySlice,
    categories: categoryCountriesSlice,
    mode: darkModeSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
