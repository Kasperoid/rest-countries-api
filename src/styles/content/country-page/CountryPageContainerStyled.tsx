import { Flex, FlexProps } from 'antd';
import styled from 'styled-components';
import { ThemeModeType } from '../../../types/types';
import { baseTheme } from '../../baseTheme';

export const CountryPageContainerStyled = styled(Flex)<
  FlexProps & ThemeModeType
>`
  && {
    & .ant-typography {
      color: ${({ mode }) => baseTheme.color[mode].text};
    }
  }
`;
