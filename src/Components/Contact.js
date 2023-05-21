import { Alert, Box, Divider, IconButton, Snackbar, TextField, styled } from '@mui/material'
import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import '../App.css';

const IconRedirectButton = styled(IconButton)({
    margin: 5,
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
                height: '90vh',
                backgroundColor: 'background.default',
                display: 'flex'
            }}
        >
            <Box
                sx={{
                    width: '40vw',
                    pl: '10vw',
                }}
            >
                <Box
                    sx={{
                        display: 'flexbox',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        fontFamily: 'Sofia Sans',
                        fontSize: '6.583vw', // 100px
                        textAlign: 'left',
                        width: '40vw',
                        color: '#ffb300',
                        pt: '18vh',
                    }}
                >
                    Contact
                    <Box
                        sx={{
                            fontSize: '2.37vw', // 36px
                            color: 'text.secondary',
                        }}
                    >
                        Get in touch with me via <br/>social media
                    </Box>
                    <Box
                        className="contact"
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
                </Box>
            </Box>
            <Divider orientation="vertical" variant='middle' flexItem>
                OR
            </Divider>
            <Box
                sx={{
                    width: '40vw',
                    pr: '10vw',
                }}
            >
                 <Box
                    sx={{
                        display: 'flexbox',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        fontFamily: 'Sofia Sans',
                        fontSize: '6.583vw', // 100px
                        textAlign: 'left',
                        width: '40vw',
                        color: '#ffb300',
                        pt: '3vh',
                        pl: '5vw',
                    }}
                >
                    Email me
                    <Box
                        sx={{
                            fontSize: '2.37vw', // 36px
                            color: 'text.secondary',
                            pl: 1
                        }}
                    >
                        Send me an email
                    </Box>
                    <form onSubmit={sendEmail}>
                    <Box
                        sx={{
                            display:'grid',
                            gridRowGap:'10px',
                            width: '35vw',
                            pt: '20px'
                        }}
                    >
                        <TextField
                            variant='filled'
                            color='warning'
                            label='Name'
                            type='text'
                            name='name'
                            fullWidth
                            required
                        />
                        <TextField
                            variant='filled'
                            color='warning'
                            label='Email'
                            type='email'
                            name='email'
                            fullWidth
                            required
                        />
                        <TextField
                            variant='filled'
                            color='warning'
                            label='Message'
                            type='text'
                            name='message'
                            fullWidth
                            required
                            multiline
                            rows={7}
                        />
                        <IconRedirectButton
                            type='submit'
                            sx={{
                            backgroundColor: 'icon.background',
                            fontFamily: 'Sofia Sans, sans-serif',
                            color: 'icon.color',
                            height: '50px',
                            minWidth: '50px',
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