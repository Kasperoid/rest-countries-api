import axios from "axios";
import { CountryType, OptionSelect } from "../types/types";
import { uniqRegion } from "./uniqRegion";
import { createSelectOptions } from "./createSelectOptions";

export async function fetcherCountry(url: string, { ...args }: any): Promise<CountryType[]> {
    const resp = await axios(url, {
        params: args
    });
    const data = resp.data;
    return data;
}

export async function fetcherCategory(url: string, { ...arg }: any): Promise<OptionSelect[]> {
    const resp = await axios(url, { params: arg })
    const data: CountryType[] = resp.data
    const uniqReg: string[] = uniqRegion(data)
    const resultOptions: OptionSelect[] = createSelectOptions(uniqReg)
    return resultOptions
}