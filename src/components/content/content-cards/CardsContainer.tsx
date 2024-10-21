import { Flex, message, Space } from 'antd';
import { CardCountryStyled } from '../../../styles/content/cards/CardCountryStyled';
import { TitleStyled } from '../../../styles/TitleStyled';
import { TextStyled } from '../../../styles/TextStyled';
import { useAppSelector } from '../../../redux/hooks';
import { SpinStyled } from '../../../styles/loader/SpinStyled';
import { LoadingOutlined } from '@ant-design/icons';
import { Wrapper } from '../../../styles/Wrapper';
import { useNavigate } from 'react-router-dom';
import { ErrorType } from '../../../types/types';

export const CardsContainer = () => {
  const onClickCardHandler = (event: any) => {
    navigate(`/country/${event.target.id}`);
  };

  const errorMessage = (error: ErrorType) => {
    messageApi.open({
      type: 'error',
      content: `${error.code}: ${error.message}`,
    });
  };

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const {
    countries: data,
    isLoading,
    error,
  } = useAppSelector((state) => state.countries);
  const isDarkMode = useAppSelector((store) => store.mode.isDarkMode);

  return (
    <>
      {contextHolder}
      {error && errorMessage(error)}
      {isLoading ? (
        <SpinStyled
          mode={isDarkMode ? 'dark' : 'light'}
          indicator={<LoadingOutlined spin />}
        />
      ) : (
        <Flex wrap gap={50} justify="center">
          {data?.map((item, index) => (
            <CardCountryStyled
              mode={isDarkMode ? 'dark' : 'light'}
              key={index}
              hoverable
              cover={<img alt={item.name.common} src={item.flags.svg} />}
            >
              <Wrapper id={`${item.ccn3}`} onClick={onClickCardHandler} />
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
