import { Select, SelectProps } from 'antd';
import styled from 'styled-components';
import { themeModeType } from '../../../types/types';
import { baseTheme } from '../../baseTheme';

interface SelectCountryProps extends Omit<SelectProps, 'mode'>, themeModeType {}

export const SelectCountryStyled = styled(Select)<SelectCountryProps>`
  && {
    height: 100%;
    width: 150px;
    box-shadow: 0px 0px 25px -3px rgba(34, 60, 80, 0.15);

    &.ant-select {
      & .ant-select-selector {
        background-color: ${({ mode }) => baseTheme.color[mode].element};
        border-color: ${({ mode }) => baseTheme.color[mode].element} !important;

        & .ant-select-selection-placeholder,
        & .ant-select-selection-item {
          color: ${({ mode }) => baseTheme.color[mode].input};
        }
      }

      & .ant-select-arrow {
        & svg {
          fill: ${({ mode }) => baseTheme.color[mode].input};
        }
      }
    }
  }
`;
