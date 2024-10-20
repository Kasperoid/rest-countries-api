import { Col, Flex, Image, Row, Space } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { SpinStyled } from '../../../styles/loader/SpinStyled';
import { LoadingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { fetchCountry } from '../../../redux/slices/countrySlice';
import { TitleStyled } from '../../../styles/TitleStyled';
import { TextStyled } from '../../../styles/TextStyled';
import { CountryPageContainerStyled } from '../../../styles/content/country-page/CountryPageContainerStyled';
import { ButtonsBorderedStyled } from '../../../styles/content/country-page/ButtonsBorderedStyled';

export const CountryPageContainer = () => {
  const params = useParams();
  const { isLoading, country } = useAppSelector((store) => store.country);
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((store) => store.mode.isDarkMode);
  const navigate = useNavigate();

  const optionsDescFirstCol = [
    {
      title: 'Native Name',
      value: country?.name.nativeName.common,
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
      value: country?.tld,
    },
    {
      title: 'Currencies',
      value: country?.currencies,
    },
    {
      title: 'Languages',
      value: country?.languages,
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
        <CountryPageContainerStyled
          mode={isDarkMode ? 'dark' : 'light'}
          vertical
          gap={50}
        >
          <div>
            <ButtonsBorderedStyled
              mode={isDarkMode ? 'dark' : 'light'}
              onClick={() => navigate(-1)}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </ButtonsBorderedStyled>
          </div>
          <Row
            gutter={[0, 50]}
            align={'middle'}
            justify={{ md: 'space-between', sm: 'center' }}
          >
            <Col xl={8} lg={9} md={9} sm={12} xs={24}>
              <Image src={country?.flags.svg} />
            </Col>
            <Col xl={14} lg={12} md={12}>
              <TitleStyled level={2}>{country?.name.common}</TitleStyled>
              <Row style={{ margin: '15px 0 30px' }} gutter={[0, { xs: 30 }]}>
                <Col xl={10} lg={12} xs={24}>
                  <Flex vertical>
                    {optionsDescFirstCol.map((item, index) => (
                      <Space key={index}>
                        <TitleStyled level={3}>{item.title}: </TitleStyled>
                        <TextStyled>{item.value}</TextStyled>
                      </Space>
                    ))}
                  </Flex>
                </Col>
                <Col xl={12} lg={12} xs={24}>
                  <Flex vertical>
                    {optionsDescSecondCol.map((item, index) => (
                      <Space key={index}>
                        <TitleStyled level={3}>{item.title}: </TitleStyled>
                        <TextStyled>{item.value}</TextStyled>
                      </Space>
                    ))}
                  </Flex>
                </Col>
              </Row>
              {country?.borders?.length !== 0 && (
                <Flex wrap gap={10} align="center">
                  <TitleStyled level={3}>Border Countries: </TitleStyled>
                  <Flex gap={15} wrap>
                    {country?.borders?.map((item, index) => (
                      <ButtonsBorderedStyled
                        key={index}
                        mode={isDarkMode ? 'dark' : 'light'}
                        onClick={() => navigate(-1)}
                      >
                        {item}
                      </ButtonsBorderedStyled>
                    ))}
                  </Flex>
                </Flex>
              )}
            </Col>
          </Row>
        </CountryPageContainerStyled>
      )}
    </>
  );
};
