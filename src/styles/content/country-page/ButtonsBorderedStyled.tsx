import { Button, ButtonProps } from 'antd';
import styled from 'styled-components';
import { ThemeModeType } from '../../../types/types';
import { baseTheme } from '../../baseTheme';

export const ButtonsBorderedStyled = styled(Button)<
  ButtonProps & ThemeModeType
>`
  && {
    border: none;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3);
    background-color: ${({ mode }) => baseTheme.color[mode].element};
    color: ${({ mode }) => baseTheme.color[mode].text};

    &.ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover {
      background-color: ${({ mode }) => baseTheme.color[mode].element};
      color: ${({ mode }) => baseTheme.color[mode].text};
      padding: 0 20px;
    }
  }
`;
