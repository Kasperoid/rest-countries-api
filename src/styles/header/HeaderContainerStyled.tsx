import { Layout } from 'antd';
import styled from 'styled-components';
import { themeModeType } from '../../types/types';
import { baseTheme } from '../baseTheme';

const { Header } = Layout;

export const HeaderContainerStyled = styled(Header)<themeModeType>`
  && {
    &.ant-layout-header {
      padding: 0;
      box-shadow: 0px 6px 14px 0px rgba(34, 60, 80, 0.1);
      z-index: 2;
      background-color: ${({ mode }) => baseTheme.color[mode].element};

      & .ant-typography {
        color: ${({ mode }) => baseTheme.color[mode].text};
      }

      & .ant-btn-variant-text:not(:disabled):not(.ant-btn-disabled) {
        &:hover {
          color: ${({ mode }) => baseTheme.color[mode].text};
        }
      }

      & .ant-btn-color-default {
        color: ${({ mode }) => baseTheme.color[mode].text};
      }
    }
  }
`;
