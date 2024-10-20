import { CountryPageType, CountryType } from '../types/types';

export const rebuildingCountry = (data: CountryType): CountryPageType => {
  return {
    ...data,
    capital: data.capital.join('; '),
    name: {
      ...data.name,
      nativeName: Object.values(data.name.nativeName)[0],
    },
    currencies: data.currencies?.[Object.keys(data.currencies)[0]].name,
    languages: data.languages && Object.values(data.languages).join('; '),
    tld: data.tld?.join('; '),
  };
};
