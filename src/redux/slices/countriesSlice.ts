import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ArgsFetcherType, CountryType, ErrorType } from '../../types/types';
import axios from 'axios';

type CountriesState = {
  countries: CountryType[] | null;
  isLoading: boolean;
  error: ErrorType | null;
};

const initialState: CountriesState = {
  countries: null,
  isLoading: true,
  error: null,
};

export const fetchCountries = createAsyncThunk<CountryType[], ArgsFetcherType>(
  'fetch/countries',
  async function (args, thunkApi) {
    const { url, ...paramsQuery } = args;
    const resp = await axios(url, {
      params: paramsQuery,
    });
    try {
      const data = resp.data;
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(new Error('Ошибка'));
    }
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      console.log(action);
      state.error = {
        code: action.error.code ?? '404',
        message: action.error.message ?? 'Произошла ошибка',
      };
      state.isLoading = false;
    });
  },
});

export default countriesSlice.reducer;
