import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import { HeaderContainer } from './components/header/HeaderContainer';
import { ContentContainer } from './components/content/ContentContainer';
import { LayoutStyled } from './styles/layout/LayoutStyled';
import { useAppDispatch } from './redux/hooks';
import { fetchCountries } from './redux/slices/countriesSlice';
import { URL_ALL_COUNTRIES } from './constants/constants';

// Вынести контекст в отдельную функцию

type contextType = {
  isDarkMode: boolean;
  setIsDarkMode: (c: boolean) => void;
};

export const Context = React.createContext<contextType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchCountries({
        url: URL_ALL_COUNTRIES,
        fields: 'flags,population,region,capital,name,ccn3',
      })
    );
  }, [dispatch]);

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
      <GlobalStyle mode={isDarkMode ? 'dark' : 'light'} />
      <LayoutStyled mode={isDarkMode ? 'dark' : 'light'}>
        <HeaderContainer />
        <ContentContainer />
      </LayoutStyled>
    </Context.Provider>
  );
}

export default App;
