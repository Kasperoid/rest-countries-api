import { CountryType } from "../types/types";

export const uniqRegion = (countries: CountryType[]): string[] => ['All', ...Array.from(new Set(countries.map(item => item.region)))]
