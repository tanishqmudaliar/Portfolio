import React from 'react';
import './App.css';
import Header from './Components/Header';
import Mainpage from './Components/Mainpage';
import { Box, IconButton } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Footer from './Components/Footer';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div className="App">
      <Box
        sx={{
          position: 'fixed',
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
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </div>
      </Box>
      <Mainpage />
      <Footer />
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
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
