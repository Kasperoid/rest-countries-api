import { createGlobalStyle } from 'styled-components'
import { baseTheme } from './baseTheme';
import { ThemeModeType } from '../types/types';

export default createGlobalStyle<ThemeModeType>`
* {
    font-family: "Nunito Sans", sans-serif !important;

    & .ant-select-dropdown {
        background-color: ${({ mode }) => baseTheme.color[mode].element};
        & .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
            background-color: ${({ mode }) => baseTheme.color[mode].background}
        }
        & .ant-select-item-option-content {
            color: ${({ mode }) => baseTheme.color[mode].input};
        }
    }
};



`