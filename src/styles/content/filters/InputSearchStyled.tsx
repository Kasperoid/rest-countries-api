import { Input } from 'antd';
import styled from 'styled-components';
import { ThemeModeType } from '../../../types/types';
import { baseTheme } from '../../baseTheme';
import { SearchProps } from 'antd/es/input';

const { Search } = Input;

export const InputSearchStyled = styled(Search)<SearchProps & ThemeModeType>`
  && {
    box-shadow: 0px 0px 25px -3px rgba(34, 60, 80, 0.15);
    width: 30vw;

    & .ant-input {
      background-color: ${({ mode }) => baseTheme.color[mode].element};
      color: ${({ mode }) => baseTheme.color[mode].text};

      & ::placeholder {
        color: ${({ mode }) => baseTheme.color[mode].input};
      }
    }

    &.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
      & .ant-btn {
        background-color: ${({ mode }) => baseTheme.color[mode].element};
        border-color: ${({ mode }) => baseTheme.color[mode].background};
        color: ${({ mode }) => baseTheme.color[mode].text};
        transition: 0.5s ease border-color;

        &:hover {
          border-color: ${({ mode }) => baseTheme.color[mode].input};
        }
      }
    }

    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;
