import { Card, CardProps } from 'antd';
import styled from 'styled-components';
import { themeModeType } from '../../../types/types';
import { baseTheme } from '../../baseTheme';

export const CardCountryStyled = styled(Card)<CardProps & themeModeType>`
  && {
    &.ant-card {
      max-width: 400px;
      min-width: 250px;
      flex: 20%;
      background-color: ${({ mode }) => baseTheme.color[mode].element};
      border: none;
      box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.1);
      transition: 0.5ms opacity ease-in-out;

      &:hover {
        opacity: 0.9;
      }

      & img {
        max-height: 250px;
        object-fit: cover;
      }
      & .ant-typography {
        color: ${({ mode }) => baseTheme.color[mode].text};
      }
    }
  }
`;
