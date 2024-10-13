import { countryType } from "../types/types";

export const uniqRegion = (countries: countryType[]): string[] => Array.from(new Set(countries.map(item => item.region)))
