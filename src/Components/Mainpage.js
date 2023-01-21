import React from 'react';
import "../App.css";
import html from "../Assets/html5.png";
import css from "../Assets/css3.png";
import js from "../Assets/javascript.png";
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const IconRedirectButton = styled(IconButton)({
  margin: 5,
  '&:hover': {
    backgroundColor: '#ffb300',
    color: '#131313',
    borderRadius: '10px',
  },
});

function Mainpage() {
  return (
    <div>
        <Box
          sx={{
            marginTop: '6.3vh',
            bgcolor: 'background.default',
            display: 'flex',
          }}
        >
          <div className='mainpage_ct'>
            <Box
              sx={{
                mt: '25vh',
                display: 'flex',
              }}
            >
              <div className='sofia'>
                <Box
                  sx={{
                    color: "text.secondary",
                    fontSize: '35px',
                  }}
                >
                  Hello, my name is
                </Box>
              </div>
              <div className='pacifico'>
                <Box
                  sx={{
                    fontSize: '40px',
                    color: '#ffb300',
                    mt: -2.7,
                    ml: 1
                  }}
                >
                  Tanishq Mudaliar
                </Box>
              </div>
            </Box>
            <Box
              sx={{
                mt: '5vh',
                textAlign: 'left',
              }}
            >
            <div className='sofia'>
              <Box
                sx={{
                  fontSize: '20px',
                  color: 'text.secondary'
                }}
              >
                I'm a freelance web designer & full-stack developer from Mumbai, India.
                I focus on writing clean, elegant, and efficient code.
                I have an adequate experience with HTML5 <img src={html} alt="html5" className="icon" />,
                CSS3 <img src={css} alt="css3" className="icon" />,
                and Javascript <img src={js} alt="js" className="icon" /><br/>(Node JS & React JS).
              </Box>
            </div>
            </Box>
            <Box
              sx={{
                textAlign: 'left',
                marginTop: '7vh',
              }}
            >
              <IconRedirectButton
                href="https://instagram.com/tanishq_mudaliar"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: 'icon.background',
                  fontFamily: 'Sofia Sans, sans-serif',
                  color: 'icon.color',
                  height: '50px',
                  minWidth: '50px',
                  fontSize: '20px',
                }}
              >
                <InstagramIcon />
              </IconRedirectButton>
              <IconRedirectButton
                href="https://twitter.com/tanishqmudaliar"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: 'icon.background',
                  fontFamily: 'Sofia Sans, sans-serif',
                  color: 'icon.color',
                  height: '50px',
                  minWidth: '50px',
                  fontSize: '20px',
                }}
              >
                <TwitterIcon />
              </IconRedirectButton>
              <IconRedirectButton
                href="https://wa.me/+917977188240"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: 'icon.background',
                  fontFamily: 'Sofia Sans, sans-serif',
                  color: 'icon.color',
                  height: '50px',
                  minWidth: '50px',
                  fontSize: '20px',
                }}
              >
                <WhatsAppIcon />
              </IconRedirectButton>
              <IconRedirectButton
                href="https://github.com/tanishqmudaliar"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: 'icon.background',
                  fontFamily: 'Sofia Sans, sans-serif',
                  color: 'icon.color',
                  height: '50px',
                  minWidth: '50px',
                  fontSize: '20px',
                }}
              >
                <GitHubIcon />
              </IconRedirectButton>
              <IconRedirectButton
                href="https://dev.to/tanishqmudaliar"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: 'icon.background',
                  fontFamily: 'Sofia Sans, sans-serif',
                  color: 'icon.color',
                  height: '50px',
                  minWidth: '50px',
                  fontSize: '20px',
                }}
              >
                <LogoDevIcon />
              </IconRedirectButton>
              <IconRedirectButton
                href="mailto:tanishqmudaliar1123@gmail.com"
                target="_blank"
                rel="noopener"
                sx={{
                  backgroundColor: 'icon.background',
                  fontFamily: 'Sofia Sans, sans-serif',
                  color: 'icon.color',
                  height: '50px',
                  minWidth: '50px',
                  fontSize: '20px',
                }}
              >
                <EmailIcon />
              </IconRedirectButton>
            </Box>
          </div>
          <div className='mainpage_bg' />
        </Box>
    </div>
  )
}

export default Mainpage