import { Button, Col, Flex, Image, Row, Space } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { SpinStyled } from '../../../styles/loader/SpinStyled';
import { LoadingOutlined } from '@ant-design/icons';
import { fetchCountry } from '../../../redux/slices/countrySlice';
import { TitleStyled } from '../../../styles/TitleStyled';
import { TextStyled } from '../../../styles/TextStyled';

export const CountryPageContainer = () => {
  const params = useParams();
  const { isLoading, country } = useAppSelector(store => store.country);
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(store => store.mode.isDarkMode);

  const optionsDescFirstCol = [
    {
      title: 'Native Name',
      value: country?.name.nativeName,
    },
    {
      title: 'Population',
      value: country?.population,
    },
    {
      title: 'Region',
      value: country?.region,
    },
    {
      title: 'Sub Region',
      value: country?.subregion,
    },
    {
      title: 'Capital',
      value: country?.capital,
    },
  ];

  const optionsDescSecondCol = [
    {
      title: 'Top Level Domain',
      value: country?.tld?.join(' '),
    },
    {
      title: 'Currencies',
      value: country?.currencies, //?????
    },
    {
      title: 'Native Name',
      value: country?.languages, //????
    },
  ];

  useEffect(() => {
    dispatch(
      fetchCountry({
        url: `https://restcountries.com/v3.1/alpha/${params.countryId}`,
        fields:
          'name,population,region,capital,flags,subregion,tld,currencies,languages,borders,ccn3',
      })
    );
  }, [dispatch, params.countryId]);
  return (
    <>
      {isLoading ? (
        <SpinStyled
          mode={isDarkMode ? 'dark' : 'light'}
          indicator={<LoadingOutlined spin />}
        />
      ) : (
        <Flex vertical>
          <div>
            <Button>Back</Button>
          </div>
          <Row>
            <Col xl={12}>
              <Image src={country?.flags.svg} />
            </Col>
            <Col xl={12}>
              <TitleStyled level={2}>{country?.name.common}</TitleStyled>
              <Row>
                <Col xl={12}>
                  <Space>
                    <TitleStyled level={3}>Native Name: </TitleStyled>
                    <TextStyled>{country?.population}</TextStyled>
                  </Space>
                </Col>
                <Col xl={12}></Col>
              </Row>
            </Col>
          </Row>
        </Flex>
      )}
    </>
  );
};
