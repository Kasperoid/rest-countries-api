import { Button } from 'antd';
import { HeaderContainerInnerStyled } from '../../styles/header/HeaderContainerInnerStyled';
import { HeaderContainerStyled } from '../../styles/header/HeaderContainerStyled';
import { TitleStyled } from '../../styles/TitleStyled';
import { MoonOutlined } from '@ant-design/icons';
import { Context } from '../../App';
import { useContext } from 'react';

export const HeaderContainer = () => {
  const { isDarkMode, setIsDarkMode } = useContext(Context);
  return (
    <HeaderContainerStyled mode={isDarkMode ? 'dark' : 'light'}>
      <HeaderContainerInnerStyled align="center" justify="space-between">
        <TitleStyled level={1}>Where in the world?</TitleStyled>
        <Button
          type="text"
          icon={<MoonOutlined />}
          style={{ fontWeight: 600 }}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Dark Mode
        </Button>
      </HeaderContainerInnerStyled>
    </HeaderContainerStyled>
  );
};
