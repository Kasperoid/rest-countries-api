import React, { useState } from 'react';
import GlobalStyle from './styles/global';
import { HeaderContainer } from './components/header/HeaderContainer';
import { ContentContainer } from './components/content/ContentContainer';
import useSWR from 'swr';
import { LoadingOutlined } from '@ant-design/icons';
import { fetcherCountry } from './helpers/fetcher';
import { URL_ALL_COUNTRIES } from './constants/constants';
import { SpinStyled } from './styles/loader/SpinStyled';
import { LayoutStyled } from './styles/layout/LayoutStyled';

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
  const { isLoading } = useSWR('all-countries', () =>
    fetcherCountry(URL_ALL_COUNTRIES, {
      fields:
        'name,population,region,capital,flags,subregion,tld,currencies,languages,borders,ccn3',
    })
  );

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
      <GlobalStyle mode={isDarkMode ? 'dark' : 'light'} />
      <LayoutStyled mode={isDarkMode ? 'dark' : 'light'}>
        <HeaderContainer />
        {isLoading ? (
          <SpinStyled
            mode={isDarkMode ? 'dark' : 'light'}
            indicator={<LoadingOutlined spin />}
          />
        ) : (
          <ContentContainer />
        )}
      </LayoutStyled>
    </Context.Provider>
  );
}

export default App;
