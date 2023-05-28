import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Computer from '../Canvas/ComputerCanvas';

const IconRedirectButton = styled(IconButton)({
  margin: 5,
  '&:hover': {
    backgroundColor: '#ffb300',
    color: '#131313',
    borderRadius: '10px',
  },
});

function Mainpage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Box
        sx={{
          bgcolor: 'background.default',
          display: { md: 'grid', lg: 'flex' },
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 'max-content',
          minHeight: '95vh',
          pt: { xs: '10vh', sm: '13vh', md: '15vh', lg: '5vh' },
        }}
      >
        <div data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
          <Box
            sx={{
              px: '5%',
              fontFamily: 'Sofia Sans',
              color: 'text.secondary',
              fontSize: '56px',
              display: 'flexbox',
              width: 'fit-content',
              textAlign: 'left',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: { xs: 'grid', sm: 'flex' },
              }}
            >
              Hi, I'm
              <Box
                sx={{
                  ml: { xs: 'none', sm: 1 },
                  mt: -2.8,
                  color: '#ffb300',
                  fontFamily: 'Pacifico',
                }}
              >
                Tanishq
              </Box>
            </Box>
            <Box
              sx={{
                fontSize: '22px',
                color: 'text.secondary',
                width: '90%',
                maxWidth: '600px',
                textAlign: 'left',
                mt: '10px',
              }}
            >
              I'm a diploma student who develops web applications and user
              interfaces. I focus on writing clean, elegant, and efficient code.
              I love playing with electronic components and use my coding and
              electronics knowledge to build some fascinating projects.
            </Box>
            <Box
              sx={{
                mt: { xs: '15px', sm: '25px' },
                display: { xs: 'grid', sm: 'flex' },
                gridTemplateColumns: '50px 50px 50px',
                gridTemplateRows: 'auto',
                gridColumnGap: '20px',
                gridRowGap: '10px',
              }}
            >
              <Tooltip title="Instagram">
                <IconRedirectButton
                  href="https://instagram.com/tanishq_mudaliar"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: 'icon.background',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'icon.color',
                    height: '50px',
                    width: '50px',
                    fontSize: '20px',
                  }}
                >
                  <InstagramIcon />
                </IconRedirectButton>
              </Tooltip>
              <Tooltip title="Twitter">
                <IconRedirectButton
                  href="https://twitter.com/tanishqmudaliar"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: 'icon.background',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'icon.color',
                    height: '50px',
                    width: '50px',
                    fontSize: '20px',
                  }}
                >
                  <TwitterIcon />
                </IconRedirectButton>
              </Tooltip>
              <Tooltip title="Facebook">
                <IconRedirectButton
                  href="https://www.facebook.com/mudaliartanishq"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: 'icon.background',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'icon.color',
                    height: '50px',
                    width: '50px',
                    fontSize: '20px',
                  }}
                >
                  <FacebookIcon />
                </IconRedirectButton>
              </Tooltip>
              <Tooltip title="Whatsapp">
                <IconRedirectButton
                  href="https://wa.me/+917977188240"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: 'icon.background',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'icon.color',
                    height: '50px',
                    width: '50px',
                    fontSize: '20px',
                  }}
                >
                  <WhatsAppIcon />
                </IconRedirectButton>
              </Tooltip>
              <Tooltip title="Github">
                <IconRedirectButton
                  href="https://github.com/tanishqmudaliar"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: 'icon.background',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'icon.color',
                    height: '50px',
                    width: '50px',
                    fontSize: '20px',
                  }}
                >
                  <GitHubIcon />
                </IconRedirectButton>
              </Tooltip>
              <Tooltip title="Dev.to">
                <IconRedirectButton
                  href="https://dev.to/tanishqmudaliar"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: 'icon.background',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'icon.color',
                    height: '50px',
                    width: '50px',
                    fontSize: '20px',
                  }}
                >
                  <LogoDevIcon />
                </IconRedirectButton>
              </Tooltip>
            </Box>
          </Box>
        </div>
        <Box
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          sx={{
            width: { md: '100vw', lg: '45vw' },
            minWidth: '340px',
            height: { xs: '30vh', sm: '50vh', md: '50vh' },
          }}
        >
          <Computer />
        </Box>
      </Box>
    </div>
  );
}

export default Mainpage;
