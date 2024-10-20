import { Flex } from 'antd';
import { useEffect } from 'react';
import { InputSearchStyled } from '../../styles/content/filters/InputSearchStyled';
import { SelectCountryStyled } from '../../styles/content/filters/SelectCountryStyled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCategory } from '../../redux/slices/categoryContriesSlice';
import { URL_ALL_COUNTRIES } from '../../constants/constants';
import { fetchCountries } from '../../redux/slices/countriesSlice';

export const ContentFilterContainer = () => {
  const onSelectCountryHandler = (selectText: string): void => {
    const searchUrl =
      selectText === 'All'
        ? URL_ALL_COUNTRIES
        : `https://restcountries.com/v3.1/region/${selectText}`;

    dispatch(
      fetchCountries({
        url: searchUrl,
        fields: 'flags,population,region,capital,name,ccn3',
      })
    );
  };

  const onSearchInputHandler = (searchTextCountry: string) => {
    const searchUrl =
      searchTextCountry.trim() === ''
        ? URL_ALL_COUNTRIES
        : `https://restcountries.com/v3.1/name/${searchTextCountry}`;

    dispatch(
      fetchCountries({
        url: searchUrl,
        fields: 'flags,population,region,capital,name,ccn3',
      })
    );
  };

  const { isLoading: isLoadingFilters, options: data } = useAppSelector(
    store => store.categories
  );
  const { isLoading: isLoadingCards } = useAppSelector(
    store => store.countries
  );
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(store => store.mode.isDarkMode);

  useEffect(() => {
    dispatch(
      fetchCategory({
        url: URL_ALL_COUNTRIES,
        fields: 'region',
      })
    );
  }, [dispatch]);

  return (
    <Flex justify="space-between">
      <InputSearchStyled
        loading={isLoadingCards}
        mode={isDarkMode ? 'dark' : 'light'}
        placeholder="Search for a country..."
        variant="borderless"
        size="large"
        onSearch={searchTextCountry => onSearchInputHandler(searchTextCountry)}
      />
      <div>
        <SelectCountryStyled
          loading={isLoadingFilters || isLoadingCards}
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
