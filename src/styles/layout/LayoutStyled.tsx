import { Layout, LayoutProps } from 'antd';
import styled from 'styled-components';
import { ThemeModeType } from '../../types/types';
import { baseTheme } from '../baseTheme';

export const LayoutStyled = styled(Layout)<LayoutProps & ThemeModeType>`
  & {
    min-height: 100vh;
    background-color: ${({ mode }) => baseTheme.color[mode].background};
  }
`;
