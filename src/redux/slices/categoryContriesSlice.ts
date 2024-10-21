import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ArgsFetcherType, CountryType, OptionSelect } from '../../types/types';
import axios from 'axios';
import { uniqRegion } from '../../helpers/uniqRegion';
import { createSelectOptions } from '../../helpers/createSelectOptions';

type CategoryCountriesType = {
  isLoading: boolean;
  options: OptionSelect[] | [];
};

const initialState: CategoryCountriesType = {
  isLoading: true,
  options: [],
};

export const fetchCategory = createAsyncThunk<OptionSelect[], ArgsFetcherType>(
  'fetch/category',
  async function (args) {
    const { url, ...queryParams } = args;
    const resp = await axios(url, { params: queryParams });
    const data: CountryType[] = resp.data;
    const uniqReg: string[] = uniqRegion(data);
    const resultOptions: OptionSelect[] = createSelectOptions(uniqReg);
    return resultOptions;
  }
);

const categoryCountriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.options = action.payload;
      state.isLoading = false;
    });
  },
});

export default categoryCountriesSlice.reducer;
