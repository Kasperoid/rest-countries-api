import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArgsFetcherType, CountryType } from "../../types/types";
import axios from "axios";

type StateType = {
    isLoading: boolean,
    country: CountryType | null
}

const initialState: StateType = {
    isLoading: true,
    country: null
}

export const fetchCountry = createAsyncThunk<CountryType, ArgsFetcherType>
    ('fetch/country',
        async function (args) {
            const { url, ...paramsQuery } = args
            const resp = await axios(url, {
                params: paramsQuery
            });
            const data = resp.data;
            return data;
        }
    )

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountry.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCountry.fulfilled, (state, action) => {
            state.country = action.payload
            state.isLoading = false
        })
    }
})

export default countrySlice.reducer