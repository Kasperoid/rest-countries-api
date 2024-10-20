import { configureStore } from '@reduxjs/toolkit';
import contriesSlice from './slices/countriesSlice'
import categoryCountriesSlice from './slices/categoryContriesSlice'

const store = configureStore({
  reducer: {
    contries: contriesSlice,
    categories: categoryCountriesSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
