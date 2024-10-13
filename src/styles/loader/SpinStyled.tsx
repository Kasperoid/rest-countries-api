import { Spin, SpinProps } from 'antd';
import styled from 'styled-components';
import { themeModeType } from '../../types/types';
import { baseTheme } from '../baseTheme';

export const SpinStyled = styled(Spin)<SpinProps & themeModeType>`
  & {
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    color: ${({ mode }) => baseTheme.color[mode].text};

    & .ant-spin-dot {
      font-size: 35px;
    }
  }
`;
