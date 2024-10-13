export type countryType = {
    name: {
        common: string,
        nativeName: {
            common: string
        }
    },
    flags: {
        png: string,
        svg: string,
    },
    capital: string[],
    region: string,
    population: number,
    tld?: string[],
    currencies?: {
        name: string,
    }
    subregion?: string,
    languages?: unknown,
    borders?: null | string[],
    ccn3: number;
}

export type themeModeType = {
    mode: 'light' | 'dark';
}

export type optionSelect = {
    value: string;
    label: string;
};