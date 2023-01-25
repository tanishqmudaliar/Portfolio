import React, { useEffect } from 'react';
import { Box, Link } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
        <Box
            sx={{
                display: 'flex',
                backgroundColor: 'background.footer',
                boxShadow: '0px 1px 15px #808080',
                height: '100px'
            }}
        >
            <Box
                sx={{
                    ml: '10vw',
                    width: '40vw',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'text.secondary',
                    pt: 5,
                    textAlign: 'left',
                }}
            >
                                <Link
                    href="https://tanishqmudaliar.web.app/"
                    color="text.footer"
                    underline="none"
                    sx={{
                        mx: 1,
                        '&:hover': {
                            color: 'text.hover'
                        }
                    }}
                >
                    © 2022 Tanishq Mudaliar
                </Link>
            </Box>
            <Box
                sx={{
                    width: '40vw',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'text.secondary',
                    pt: 5,
                    textAlign: 'right',
                }}
            >
                <Link
                    href="/home"
                    color="text.footer"
                    underline="none"
                    sx={{
                        mx: 1,
                        '&:hover': {
                            color: 'text.hover'
                        }
                    }}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    color="text.footer"
                    underline="none"
                    sx={{
                        mx: 1,
                        '&:hover': {
                            color: 'text.hover'
                        }
                    }}
                >
                    About
                </Link>
                <Link
                    href="/portfolio"
                    color="text.footer"
                    underline="none"
                    sx={{
                        mx: 1,
                        '&:hover': {
                            color: 'text.hover'
                        }
                    }}
                >
                    Portfolio
                </Link>
                <Link
                    href="/resume"
                    color="text.footer"
                    underline="none"
                    sx={{
                        mx: 1,
                        '&:hover': {
                            color: 'text.hover'
                        }
                    }}
                >
                    Resume
                </Link>
                <Link
                    href="/blog"
                    color="text.footer"
                    underline="none"
                    sx={{
                        mx: 1,
                        '&:hover': {
                            color: 'text.hover'
                        }
                    }}
                >
                    Blog
                </Link>
                <Link
                    href="/contact"
                    color="text.footer"
                    underline="none"
                    sx={{
                        mx: 1,
                        '&:hover': {
                            color: 'text.hover'
                        }
                    }}
                >
                    Contact
                </Link>
            </Box>
        </Box>
    </div>
  )
}

export default Footer