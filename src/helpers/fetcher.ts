import axios from "axios";
import { countryType, optionSelect } from "../types/types";
import { uniqRegion } from "./uniqRegion";
import { createSelectOptions } from "./createSelectOptions";

export async function fetcherCountry(url: string, { ...args }: any): Promise<countryType[]> {
    const resp = await axios(url, {
        params: args
    });
    const data = resp.data;
    return data;
}

export async function fetcherCategory(url: string, { ...arg }: any): Promise<optionSelect[]> {
    const resp = await axios(url, { params: arg })
    const data: countryType[] = resp.data
    const uniqReg: string[] = uniqRegion(data)
    const resultOptions: optionSelect[] = createSelectOptions(uniqReg)
    return resultOptions
}