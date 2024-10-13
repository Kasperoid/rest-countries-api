import { Input, InputProps } from 'antd';
import styled from 'styled-components';
import { themeModeType } from '../../../types/types';
import { baseTheme } from '../../baseTheme';

export const InputSearchStyled = styled(Input)<InputProps & themeModeType>`
  && {
    padding: 15px;
    box-shadow: 0px 0px 25px -3px rgba(34, 60, 80, 0.15);
    width: 30vw;
    min-width: 300px;

    &.ant-input-affix-wrapper {
      background-color: ${({ mode }) => baseTheme.color[mode].element};
      color: ${({ mode }) => baseTheme.color[mode].text};

      & ::placeholder {
        color: ${({ mode }) => baseTheme.color[mode].input};
      }

      & svg {
        fill: ${({ mode }) => baseTheme.color[mode].input};
      }
    }
  }
`;
