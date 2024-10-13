import axios from "axios";
import { countryType } from "../types/types";
import { uniqRegion } from "./uniqRegion";

export async function fetcherCountry(url: string, { ...args }: any): Promise<countryType[]> {
    const resp = await axios(url, {
        params: args
    });
    const data = resp.data;
    return data;
}

export async function fetcherCategory(url: string, { ...arg }: any): Promise<string[]> {
    const resp = await axios(url, { params: arg })
    const data: countryType[] = resp.data
    const result: string[] = uniqRegion(data)
    return result
}