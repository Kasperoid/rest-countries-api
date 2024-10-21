import { useEffect } from 'react';
import GlobalStyle from './styles/global';
import { HeaderContainer } from './components/header/HeaderContainer';
import { ContentContainer } from './components/content/ContentContainer';
import { LayoutStyled } from './styles/layout/LayoutStyled';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchCountries } from './redux/slices/countriesSlice';
import { URL_ALL_COUNTRIES } from './constants/constants';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountryPageContainer } from './components/content/country-page/CountryPageContainer';
import { ContentContainerStyled } from './styles/content/ContentContainerStyled';

const router = createBrowserRouter([
  {
    path: '*',
    element: <ContentContainer />,
  },
  {
    path: '/country/:countryId',
    element: <CountryPageContainer />,
  },
]);

function App() {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((store) => store.mode.isDarkMode);

  useEffect(() => {
    dispatch(
      fetchCountries({
        url: URL_ALL_COUNTRIES,
        fields: 'flags,population,region,capital,name,ccn3',
      })
    );
  }, [dispatch]);

  return (
    <>
      <GlobalStyle mode={isDarkMode ? 'dark' : 'light'} />
      <LayoutStyled mode={isDarkMode ? 'dark' : 'light'}>
        <HeaderContainer />
        <ContentContainerStyled>
          <RouterProvider router={router} />
        </ContentContainerStyled>
      </LayoutStyled>
    </>
  );
}

export default App;
