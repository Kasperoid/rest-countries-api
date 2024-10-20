import { Flex } from 'antd';
import { ContentFilterContainer } from './ContentFilterContainer';
import { CardsContainer } from './content-cards/CardsContainer';

export const ContentContainer = () => {
  return (
    <Flex vertical gap={50}>
      <ContentFilterContainer />
      <CardsContainer />
    </Flex>
  );
};
