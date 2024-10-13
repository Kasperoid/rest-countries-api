import { Flex } from 'antd';
import useSWR from 'swr';
import { fetcherCategory, fetcherCountry } from '../../helpers/fetcher';
import { URL_ALL_COUNTRIES } from '../../constants/constants';
import { Context } from '../../App';
import { useContext } from 'react';
import { InputSearchStyled } from '../../styles/content/filters/InputSearchStyled';
import { SelectCountryStyled } from '../../styles/content/filters/SelectCountryStyled';

export const ContentFilterContainer = () => {
  const onSelectCountryHandler = (selectText: string): void => {
    const searchUrl =
      selectText === 'All'
        ? URL_ALL_COUNTRIES
        : `https://restcountries.com/v3.1/region/${selectText}`;

    mutate(() => fetcherCountry(searchUrl, {}), { revalidate: false });
  };

  const onSearchInputHandler = (searchTextCountry: string) => {
    const searchUrl =
      searchTextCountry.trim() === ''
        ? URL_ALL_COUNTRIES
        : `https://restcountries.com/v3.1/name/${searchTextCountry}`;

    mutate(() => fetcherCountry(searchUrl, {}), { revalidate: false });
  };

  const { data, isLoading } = useSWR('countries-category', () =>
    fetcherCategory(URL_ALL_COUNTRIES, {
      fields: 'region',
    })
  );

  const { mutate } = useSWR('all-countries');
  const { isDarkMode } = useContext(Context);

  return (
    <Flex justify="space-between">
      <InputSearchStyled
        mode={isDarkMode ? 'dark' : 'light'}
        placeholder="Search for a country..."
        variant="borderless"
        size="large"
        onSearch={searchTextCountry => onSearchInputHandler(searchTextCountry)}
      />
      <div>
        <SelectCountryStyled
          loading={isLoading}
          placeholder="Filter by Region"
          optionFilterProp="label"
          options={data}
          mode={isDarkMode ? 'dark' : 'light'}
          onSelect={selectText => onSelectCountryHandler(selectText)}
        />
      </div>
    </Flex>
  );
};
