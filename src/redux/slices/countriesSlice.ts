import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArgsFetcherType, CountryType } from "../../types/types";
import axios from "axios";

type CountriesState = {
    countries: CountryType[] | null,
    isLoading: boolean,
}

const initialState: CountriesState = {
    countries: null,
    isLoading: true
}


export const fetchCountries = createAsyncThunk<CountryType[], ArgsFetcherType>
    ('fetch/countries',
        async function (args) {
            const { url, ...paramsQuery } = args
            const resp = await axios(url, {
                params: paramsQuery
            });
            const data = resp.data;
            return data;
        })

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.countries = action.payload
            state.isLoading = false
        })
    }
})

export default countriesSlice.reducer