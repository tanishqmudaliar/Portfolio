import React, { useContext, createContext, useMemo, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Mainpage from './Components/Mainpage';
import Footer from './Components/Footer';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AppBar, Box, IconButton } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage';
import Portfolio from './Components/Portfolio';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Mainpage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resume",
    element: <Mainpage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Mainpage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Mainpage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <div className="App">
      <AppBar>
      <Box
        sx={{
          display: 'flex',
          bgcolor: 'background.default',
          height: 'fit-content',
          width: '100vw',
          padding: '1%',
          borderBottom: '1px solid grey',
        }}
      >
        <Header />
        <div className="header_r">
          <Box
            sx={{
              color: 'text.secondary'
            }}
          >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
          </Box>
        </div>
      </Box>
      </AppBar>
      <RouterProvider router={router}>
        <Mainpage />
      </RouterProvider>
      <Footer />
    </div>
  );
}

export default function AppWithDarkMode() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            ...(mode === 'dark'
              ? {
                default: '#131313',
                footer: '#202020',
              } : {
                default: '#edf1fd',
                footer: '#eaeaea'
              }
            )
          },
          text: {
            ...(mode === 'dark'
              ? {
                primary: '#ffb300',
                secondary: 'rgba(255, 255, 255, 0.7)',
                hover: '#ffb300',
                footer: 'rgba(255, 255, 255, 0.7)'
              } : {
                primary: '#000000',
                secondary: '#303030',
                hover: '#000000',
                footer: '#909090'
              }
            )
          },
          icon: {
            ...(mode === 'dark'
              ? {
                background: 'rgba(255, 255, 255, 0.7)',
                color: '#303030'
              } : {
                background: '#303030',
                color: '#ffb300'
              }
            )
          },
        },
      }),
    [mode],
  );  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}