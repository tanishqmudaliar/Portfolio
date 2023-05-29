import React, {
  useContext,
  createContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Tooltip,
  styled,
} from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Mainpage from './Components/Mainpage';
import Footer from './Components/Footer';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage';
import Portfolio from './Components/Portfolio';
import DetailedPortfolio from './Components/DetailedPortfolio';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import { getDownloadURL, ref } from 'firebase/storage';
import { analytics, storage } from './Config/firebase';
import { logEvent } from 'firebase/analytics';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ColorButton = styled(Button)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: '#9da1ad',
  fontFamily: 'Sofia Sans, sans-serif',
  fontSize: '15px',
  fontWeight: '700',
  borderRadius: '5px',
  marginTop: '2.5px',
  textTransform: 'none',
  marginLeft: '7px',
  marginRight: '7px',
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '&:focus': {
    backgroundColor: 'transparent',
    color: '#FFB300',
  },
});

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [myresume, setMyResume] = useState(null);
  useEffect(() => {
    const resume = ref(storage, 'Tanishq Mudaliar.pdf');
    getDownloadURL(resume).then((url) => {
      setMyResume(url);
    });
  });

  return (
    <div className="App">
      <AppBar
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 'fit-content',
            minHeight: '5vh',
            width: '90vw',
            px: '5vw',
            py: '1%',
            borderBottom: '1px solid grey',
            justifyContent: { xs: 'space-between', md: 'space-evenly' },
          }}
        >
          <IconButton
            sx={{
              display: { xs: 'block', md: 'none' },
              color: 'text.secondary',
              width: '40px',
              height: '40px',
            }}
            onClick={handleDrawerOpen}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Box
            sx={{
              color: 'text.primary',
              textAlign: 'center',
              fontFamily: 'Italianno',
              fontSize: '28px',
              mt: '0.8vh',
              width: 'fit-content',
              minWidth: '150px',
            }}
          >
            Tanishq Mudaliar
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: 'fit-content',
              textAlign: 'center',
            }}
          >
            <ColorButton href="/home">HOME</ColorButton>
            <ColorButton href="/about">ABOUT</ColorButton>
            <ColorButton href="/portfolio">PORTFOLIO</ColorButton>
            <ColorButton
              href={myresume}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                logEvent(analytics, 'resume_downloaded');
              }}
            >
              RESUME
            </ColorButton>
            <ColorButton href="/blog">BLOG</ColorButton>
            <ColorButton href="/contact">CONTACT</ColorButton>
          </Box>
          <Box
            sx={{
              color: 'text.secondary',
              fontSize: '15px',
              fontFamily: 'Sofia Sans, sans-serif',
              width: 'fit-content',
              minWidth: { xs: 'fit-content', sm: '130px' },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'block', md: 'block' },
              }}
            >
              {theme.palette.mode} mode
            </Box>
            <Tooltip
              title={
                theme.palette.mode === 'dark'
                  ? 'Toggle light mode'
                  : 'Toggle dark mode'
              }
            >
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === 'dark' ? (
                  <LightModeRoundedIcon />
                ) : (
                  <DarkModeRoundedIcon />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box
          sx={{
            bgcolor: 'background.footer',
            width: '100%',
            height: '100%',
          }}
        >
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                color: 'text.secondary',
              }}
            >
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider variant="middle" />
          <List
            sx={{
              display: 'grid',
              color: 'text.secondary',
              fontFamily: 'Sofia Sans, sans-serif',
            }}
          >
            <ListItemButton
              href="/home"
              sx={{
                width: '90%',
                borderRadius: 3,
                p: '5%',
                mx: '5%',
                my: '2.5%',
                justifyContent: 'space-evenly',
                '&:hover': {
                  background: 'background.default',
                },
              }}
            >
              Home
            </ListItemButton>
            <ListItemButton
              href="/about"
              sx={{
                width: '90%',
                borderRadius: 3,
                p: '5%',
                mx: '5%',
                my: '2.5%',
                justifyContent: 'space-evenly',
                '&:hover': {
                  background: 'background.default',
                },
              }}
            >
              About
            </ListItemButton>
            <ListItemButton
              href="/portfolio"
              sx={{
                width: '90%',
                borderRadius: 3,
                p: '5%',
                mx: '5%',
                my: '2.5%',
                justifyContent: 'space-evenly',
                '&:hover': {
                  background: 'background.default',
                },
              }}
            >
              Portfolio
            </ListItemButton>
            <ListItemButton
              href={myresume}
              target="_blank"
              rel="noreferrer"
              sx={{
                width: '90%',
                borderRadius: 3,
                p: '5%',
                mx: '5%',
                my: '2.5%',
                justifyContent: 'space-evenly',
                '&:hover': {
                  background: 'background.default',
                },
              }}
            >
              Resume
            </ListItemButton>
            <ListItemButton
              href="/blog"
              sx={{
                width: '90%',
                borderRadius: 3,
                p: '5%',
                mx: '5%',
                my: '2.5%',
                justifyContent: 'space-evenly',
                '&:hover': {
                  background: 'background.default',
                },
              }}
            >
              Blog
            </ListItemButton>
            <ListItemButton
              href="/contact"
              sx={{
                width: '90%',
                borderRadius: 3,
                p: '5%',
                mx: '5%',
                my: '2.5%',
                justifyContent: 'space-evenly',
                '&:hover': {
                  background: 'background.default',
                },
              }}
            >
              Contact
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: <Mainpage />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/home',
            element: <Mainpage />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/about',
            element: <About />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/portfolio',
            element: <Portfolio />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/portfolio/:id',
            element: <DetailedPortfolio />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/blog',
            element: <Blog />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/contact',
            element: <Contact />,
            errorElement: <ErrorPage />,
          },
        ])}
      />
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
    []
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
                  shadow: '#cacaca',
                }
              : {
                  default: '#edf1fd',
                  footer: '#eaeaea',
                  shadow: '#cacaca',
                }),
          },
          text: {
            ...(mode === 'dark'
              ? {
                  primary: '#ffb300',
                  secondary: 'rgba(255, 255, 255, 0.7)',
                  hover: '#ffb300',
                  footer: 'rgba(255, 255, 255, 0.7)',
                }
              : {
                  primary: '#000000',
                  secondary: '#303030',
                  hover: '#000000',
                  footer: '#909090',
                }),
          },
          icon: {
            ...(mode === 'dark'
              ? {
                  background: '#ffb300',
                  color: '#303030',
                }
              : {
                  background: '#303030',
                  color: '#ffb300',
                }),
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
