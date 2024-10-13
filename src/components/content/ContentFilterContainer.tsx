import { Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { fetcherCategory } from '../../helpers/fetcher';
import { URL_ALL_COUNTRIES } from '../../constants/constants';
import { Context } from '../../App';
import { useContext } from 'react';
import { InputSearchStyled } from '../../styles/content/filters/InputSearchStyled';
import { SelectCountryStyled } from '../../styles/content/filters/SelectCountryStyled';

type optionSelect = {
  value: string;
  label: string;
};

export const ContentFilterContainer = () => {
  const optionsSelectCreate = (options: string[]): optionSelect[] => {
    const result = options.map(item => {
      return {
        value: item,
        label: item,
      };
    });
    return result;
  };

  const { data, isLoading } = useSWR('countries-category', () =>
    fetcherCategory(URL_ALL_COUNTRIES, {
      fields: 'region',
    })
  );
  const { isDarkMode } = useContext(Context);

  const optionsSelect = data ? optionsSelectCreate(data) : undefined;

  return (
    <Flex justify="space-between">
      <InputSearchStyled
        mode={isDarkMode ? 'dark' : 'light'}
        prefix={<SearchOutlined />}
        placeholder="Search for a country..."
        variant="borderless"
      />
      <div>
        <SelectCountryStyled
          loading={isLoading}
          placeholder="Filter by Region"
          optionFilterProp="label"
          options={optionsSelect}
          mode={isDarkMode ? 'dark' : 'light'}
        />
      </div>
    </Flex>
  );
};
