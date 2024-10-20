import { Flex, Space } from 'antd';
import { useContext } from 'react';
import { Context } from '../../../App';
import { CardCountryStyled } from '../../../styles/content/cards/CardCountryStyled';
import { TitleStyled } from '../../../styles/TitleStyled';
import { TextStyled } from '../../../styles/TextStyled';
import { useAppSelector } from '../../../redux/hooks';
import { SpinStyled } from '../../../styles/loader/SpinStyled';
import { LoadingOutlined } from '@ant-design/icons';

export const CardsContainer = () => {
  const { isDarkMode } = useContext(Context);
  const data = useAppSelector(state => state.contries.countries);
  const isLoading = useAppSelector(state => state.contries.isLoading);

  return (
    <>
      {isLoading ? (
        <SpinStyled
          mode={isDarkMode ? 'dark' : 'light'}
          indicator={<LoadingOutlined spin />}
        />
      ) : (
        <Flex wrap gap={50}>
          {data?.map((item, index) => (
            <CardCountryStyled
              mode={isDarkMode ? 'dark' : 'light'}
              key={index}
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
      )}
    </>
  );
};
