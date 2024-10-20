import { Button } from 'antd';
import { HeaderContainerInnerStyled } from '../../styles/header/HeaderContainerInnerStyled';
import { HeaderContainerStyled } from '../../styles/header/HeaderContainerStyled';
import { TitleStyled } from '../../styles/TitleStyled';
import { MoonOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setIsDarkMode } from '../../redux/slices/darkModeSlice';

export const HeaderContainer = () => {
  const isDarkMode = useAppSelector(store => store.mode.isDarkMode);
  const dispatcher = useDispatch();
  return (
    <HeaderContainerStyled mode={isDarkMode ? 'dark' : 'light'}>
      <HeaderContainerInnerStyled align="center" justify="space-between">
        <TitleStyled level={1}>Where in the world?</TitleStyled>
        <Button
          type="text"
          icon={<MoonOutlined />}
          style={{ fontWeight: 600 }}
          onClick={() => dispatcher(setIsDarkMode())}
        >
          Dark Mode
        </Button>
      </HeaderContainerInnerStyled>
    </HeaderContainerStyled>
  );
};
