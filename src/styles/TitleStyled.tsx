import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import styled from 'styled-components';
import { baseTheme } from './baseTheme';

const { Title } = Typography;

interface TitleStyledProps extends Omit<TitleProps, 'level'> {
  level: 1 | 2 | 3;
}

export const TitleStyled = styled(Title)<TitleStyledProps>`
  && {
    margin: 0;
    font-weight: ${({ level }) => baseTheme.text.title[`h${level}`].weight};
    font-size: ${({ level }) =>
      `calc(${baseTheme.text.title[`h${level}`].min}px + (${
        baseTheme.text.title[`h${level}`].max
      } - ${baseTheme.text.title[`h${level}`].min}) * (100vw - 320px) / 1400)`};
  }
`;
