export type CountryType = {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  flags: {
    png: string;
    svg: string;
  };
  capital: string[];
  region: string;
  population: number;
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
    };
  };
  subregion?: string;
  languages?: {
    [key: string]: string;
  };
  borders?: null | string[];
  ccn3: number;
};

export type CountryPageType = {
  name: {
    common: string;
    nativeName: {
      common: string;
    };
  };
  flags: {
    png: string;
    svg: string;
  };
  capital: string;
  region: string;
  population: number;
  tld?: string;
  currencies?: string;
  subregion?: string;
  languages?: string;
  borders?: null | string[];
  ccn3: number;
};

export type ThemeModeType = {
  mode: 'light' | 'dark';
};

export type OptionSelect = {
  value: string;
  label: string;
};

export type ArgsFetcherType = {
  url: string;
  fields?: string;
};

export type ErrorType = {
  code: string;
  message: string;
};
