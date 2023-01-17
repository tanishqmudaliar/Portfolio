import React from 'react';
import "../App.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: 'none',
  color: '#9da1ad',
  fontFamily: 'Sofia Sans',
  fontSize: '15px',
  fontWeight: '700',
  height: '30px',
  borderRadius: '5px',
  textTransform: 'none',
  marginRight: '20px',
    '&:hover': {
        backgroundColor: "transparent",
        boxShadow: 'none',
    },
    '&:focus': {
        backgroundColor: "transparent",
        color: '#ff023b',
    },
}));

function Header() {
  return (
    <div className='header'>
        <div>
            <ColorButton>HOME</ColorButton>
            <ColorButton>ABOUT</ColorButton>
            <ColorButton>SERVICE</ColorButton>
            <ColorButton>PORTFOLIO</ColorButton>
            <ColorButton>RESUME</ColorButton>
            <ColorButton>BLOG</ColorButton>
            <ColorButton>CONTACT</ColorButton>
        </div>
    </div>
  )
}

export default Header