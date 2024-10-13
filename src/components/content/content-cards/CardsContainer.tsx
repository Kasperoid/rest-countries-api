import { Flex, Space } from 'antd';
import useSWR from 'swr';
import { countryType } from '../../../types/types';
import { URL_ALL_COUNTRIES } from '../../../constants/constants';
import { fetcherCountry } from '../../../helpers/fetcher';
import { useContext } from 'react';
import { Context } from '../../../App';
import { CardCountryStyled } from '../../../styles/content/cards/CardCountryStyled';
import { TitleStyled } from '../../../styles/TitleStyled';
import { TextStyled } from '../../../styles/TextStyled';

export const CardsContainer = () => {
  const { isDarkMode } = useContext(Context);
  const { data } = useSWR<countryType[]>('all-countries', () =>
    fetcherCountry(URL_ALL_COUNTRIES, {
      fields:
        'name,population,region,capital,flags,subregion,tld,currencies,languages,borders,ccn3',
    })
  );
  return (
    <Flex wrap gap={50}>
      {data?.map(item => (
        <CardCountryStyled
          mode={isDarkMode ? 'dark' : 'light'}
          key={item.ccn3}
          hoverable
          cover={<img alt={item.name.common} src={item.flags.svg} />}
        >
          <Flex vertical gap={10}>
            <TitleStyled level={2}>{item.name.common}</TitleStyled>
            <Flex vertical gap={5}>
              <Space>
                <TitleStyled level={3}>Population: </TitleStyled>
                <TextStyled>{item.population}</TextStyled>
              </Space>
              <Space>
                <TitleStyled level={3}>Region: </TitleStyled>
                <TextStyled>{item.region}</TextStyled>
              </Space>
              <Space>
                <TitleStyled level={3}>Capital: </TitleStyled>
                <TextStyled>{item.capital}</TextStyled>
              </Space>
            </Flex>
          </Flex>
        </CardCountryStyled>
      ))}
    </Flex>
  );
};
