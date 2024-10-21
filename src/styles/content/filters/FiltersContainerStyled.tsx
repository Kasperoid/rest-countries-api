import { Flex, FlexProps } from 'antd';
import styled from 'styled-components';

export const FiltersContainerStyled = styled(Flex)<FlexProps>`
  && {
    @media (max-width: 425px) {
      justify-content: center;
    }
  }
`;
