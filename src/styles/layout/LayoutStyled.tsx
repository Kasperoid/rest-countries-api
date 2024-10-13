import { Layout, LayoutProps } from 'antd';
import styled from 'styled-components';
import { themeModeType } from '../../types/types';
import { baseTheme } from '../baseTheme';

export const LayoutStyled = styled(Layout)<LayoutProps & themeModeType>`
  & {
    min-height: 100vh;
    background-color: ${({ mode }) => baseTheme.color[mode].background};
  }
`;
