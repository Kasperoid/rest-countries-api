export type CountryType = {
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

export type ThemeModeType = {
    mode: 'light' | 'dark';
}

export type OptionSelect = {
    value: string;
    label: string;
};

export type ArgsFetcherType = {
    url: string;
    fields?: string;
}