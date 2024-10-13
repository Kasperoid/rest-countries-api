import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import styled from 'styled-components';
import { baseTheme } from './baseTheme';

const { Text } = Typography;
export const TextStyled = styled(Text)<TextProps>`
  && {
    font-weight: 400;
    font-size: ${() =>
      `calc(${baseTheme.text.main.min}px + (${baseTheme.text.main.max} - ${baseTheme.text.main.min}) * (100vw - 320px) / 1400)`};
  }
`;
