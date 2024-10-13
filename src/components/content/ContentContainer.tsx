import { Flex } from 'antd';
import { ContentFilterContainer } from './ContentFilterContainer';
import { ContentContainerStyled } from '../../styles/content/ContentContainerStyled';
import { CardsContainer } from './content-cards/CardsContainer';

export const ContentContainer = () => {
  return (
    <ContentContainerStyled>
      <Flex vertical gap={50}>
        <ContentFilterContainer />
        <CardsContainer />
      </Flex>
    </ContentContainerStyled>
  );
};
