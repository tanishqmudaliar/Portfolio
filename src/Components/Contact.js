import { Alert, Box, Divider, IconButton, Snackbar, TextField, styled } from '@mui/material'
import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import '../App.css';
import EarthCanvas from '../Canvas/EarthCanvas';

const IconRedirectButton = styled(IconButton)({
    marginBottom: 5,
    marginTop: 5,
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#ffb300',
      color: '#131313',
    },
  });

function Contact() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('portfolio', 'contact_me', e.target, '6IROu11JPp_JwwT8k')
      .then((result) => {
          setSuccess("Email sent successfully!")
          setOpen(true);
      }, (error) => {
          setError(error)
      });
      e.target.reset()
  }

  return (
    <div>
        <Box
            sx={{
                pt: '10vh',
                minHeight: '90vh',
                height: 'fit-content',
                backgroundColor: 'background.default',
                display: { xs: 'grid', md: 'flex' }
            }}
        >
            <Box
                sx={{
                    width: { xs: '100vw', md: '50vw' },
                    height: { xs: '100vw', md: 'auto' },
                }}
            >
                <EarthCanvas />
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    alignItems: 'center',
                    fontFamily: 'Sofia Sans',
                    fontSize: '68px',
                    textAlign: 'left',
                    width: { xs: '100vw', md: '45vw' },
                    color: '#ffb300',
                }}
            >
                <Box
                    sx={{
                        mx: '5%',
                        width: '90%',
                    }}
                >
                    Contact
                </Box>
                <Box
                    sx={{
                        mx: '5%',
                        width: '90%',
                        fontSize: '36px',
                        color: 'text.secondary',
                    }}
                >
                    Get in touch with me via social media or email
                </Box>
                <Box
                    sx={{
                        display: "grid",
                        justifyContent: 'space-evenly',
                        gridTemplateColumns: '45% 45%',
                        my: '10px',
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
                        <InstagramIcon
                            sx={{
                                pr: 1
                            }}
                        /> Instagram
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
                        <TwitterIcon
                            sx={{
                                pr: 1
                            }}
                        /> Twitter
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
                        <WhatsappIcon
                            sx={{
                                pr: 1
                            }}
                        /> Whatsapp
                    </IconRedirectButton>
                    <IconRedirectButton
                        href="https://www.linkedin.com/in/tanishqmudaliar/"
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
                        <LinkedInIcon
                            sx={{
                                pr: 1
                            }}
                        /> LinkedIn
                    </IconRedirectButton>
                </Box>
                <form onSubmit={sendEmail}>
                    <Box
                        sx={{
                            display:'grid',
                            gridRowGap:'10px',
                            width: '93.4%',
                            mb: '20px',
                            mx: '3.3%',
                        }}
                    >
                        <TextField
                            variant='filled'
                            color='warning'
                            label='Your name'
                            placeholder="What's your good name?"
                            type='text'
                            name='name'
                            fullWidth
                            required
                        />
                        <TextField
                            variant='filled'
                            color='warning'
                            label='Your email'
                            placeholder="What's your web address?"
                            type='email'
                            name='email'
                            fullWidth
                            required
                        />
                        <TextField
                            variant='filled'
                            color='warning'
                            label='Your message'
                            placeholder="What do you want to say?"
                            type='text'
                            name='message'
                            fullWidth
                            required
                            multiline
                        />
                        <IconRedirectButton
                            type='submit'
                            sx={{
                                width: '100%',
                                backgroundColor: 'icon.background',
                                fontFamily: 'Sofia Sans',
                                color: 'icon.color',
                                height: '50px',
                                fontSize: '20px',
                            }}
                        >
                            <SendIcon
                                sx={{
                                    pr: 1
                                }}
                            /> Send
                        </IconRedirectButton>
                    </Box>
                </form>
            </Box>
        </Box>
        {error && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity='error' sx={{ mx: 2, mb: 2 }} >{error}</Alert>
        </Snackbar>}
        {success && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity='success' sx={{ mx: 2, mb: 2 }} >{success}</Alert>
        </Snackbar>}
    </div>
  )
}

export default Contact