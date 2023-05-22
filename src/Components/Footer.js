import React from 'react';
import {
    Box,
    Link
} from '@mui/material';

function Footer() {
  return (
    <div>
        <Box
            sx={{
                fontSize: '15px',
                display: 'flex',
                backgroundColor: 'background.footer',
                boxShadow: '0px 1px 15px #808080',
                height: { xs: '200px', sm: '100px' },
                justifyContent: 'space-around',
            }}
        >
            <Box
                sx={{
                    width: 'fit-content',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'text.secondary',
                    pt: '40px',
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
                    &copy; 2022 Tanishq Mudaliar
                </Link>
            </Box>
            <Box
                sx={{
                    width: 'fit-content',
                    fontFamily: 'Sofia Sans, sans-serif',
                    color: 'text.secondary',
                    pt: { xs: '15px', sm: '40px' },
                    textAlign: 'right',
                    display: { xs: 'grid', sm: 'block', md: 'block' }
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