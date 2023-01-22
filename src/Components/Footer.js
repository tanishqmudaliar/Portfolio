import React from 'react';
import { Box, Link } from '@mui/material';

function Footer() {
  return (
    <div>
        <Box
            sx={{
                display: 'flex',
                backgroundColor: 'background.footer',
                boxShadow: '#ffb300 0px 5px 15px',
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
                    About
                </Link>
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
                    Portfolio
                </Link>
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
                    Resume
                </Link>
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
                    Blog
                </Link>
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
                    Contact
                </Link>
            </Box>
        </Box>
    </div>
  )
}

export default Footer