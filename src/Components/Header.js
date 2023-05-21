import React, { useEffect, useState } from 'react';
import "../App.css";
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../Config/firebase';

const ColorButton = styled(Button)({
  backgroundColor: "transparent",
  boxShadow: 'none',
  color: '#9da1ad',
  fontFamily: 'Sofia Sans, sans-serif',
  fontSize: '15px',
  fontWeight: '700',
  height: '30px',
  borderRadius: '5px',
  textTransform: 'none',
  marginRight: '20px',
  marginTop: '6px',
    '&:hover': {
        backgroundColor: "transparent",
        boxShadow: 'none',
    },
    '&:focus': {
        backgroundColor: "transparent",
        color: '#FFB300',
    },
  }); 

function Header() {
  const [myresume, setMyResume] = useState(null);
  useEffect(() => {
    const resume = ref(storage,'Tanishq Mudaliar.pdf')
    getDownloadURL(resume)
      .then((url) => {
        setMyResume(url)
    })
  })
  
  return (
    <div className='header'>
        <div className='header_l'>
        <Box
          sx={{
            color: 'text.primary',
          }}
        >
          Tanishq Mudaliar
        </Box>
        </div>
        <div className='header_c'>
          <ColorButton href='/home'>HOME</ColorButton>
          <ColorButton href='/about'>ABOUT</ColorButton>
          <ColorButton href='/portfolio'>PORTFOLIO</ColorButton>
          <a
            href={myresume}
            download="Tanishq Mudaliar"
            target="_blank"
            rel="noreferrer"
          >
            <ColorButton>RESUME</ColorButton>
          </a>
          <ColorButton href='/blog'>BLOG</ColorButton>
          <ColorButton href='/contact'>CONTACT</ColorButton>
        </div>
    </div>
  )
}

export default Header;