import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Tilt } from 'react-tilt';
import { useNavigate } from 'react-router-dom';
import RobotCanvas from '../Canvas/RobotCanvas';
import { analytics, db } from '../Config/firebase.js';
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore';
import { Box, Card, CardMedia, Divider } from '@mui/material';
import '../App.css';
import 'aos/dist/aos.css';
import { logEvent } from 'firebase/analytics';

function Portfolio() {
  const [projects, setProjects] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    const docRef = collection(db, 'portfolio');
    const docqRef = query(docRef, orderBy('createdOn', 'desc'));
    onSnapshot(docqRef, (snapshot) =>
      setProjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    document.title = 'Tanishq Mudaliar | Portfolio';
  });
  useEffect(() => {
    logEvent(analytics, 'portfolio_visited');
  }, []);

  return (
    <div>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: { xs: 'grid', md: 'flex' },
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 'fit-content',
          minHeight: '90vh',
          pt: { xs: '6vh', sm: '11vh', md: '10vh', lg: '10vh' },
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          sx={{
            display: 'grid',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            fontFamily: 'Sofia Sans',
            fontSize: '68px',
            textAlign: 'left',
            color: '#ffb300',
            width: 'fit-content',
            maxWidth: { xs: '90vw', md: '40vw' },
            px: '1%',
          }}
        >
          Portfolio!
          <Box
            sx={{
              fontSize: { xs: '32px', sm: '44px' },
              color: 'text.secondary',
            }}
          >
            Check out some of the projects, I have been working on recently.
          </Box>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          sx={{
            width: { xs: '90vw', md: '40vw', lg: '45vw' },
            minWidth: '340px',
            height: { xs: '60vh', md: '70vh' },
          }}
        >
          <RobotCanvas />
        </Box>
      </Box>
      <Divider
        sx={{
          backgroundColor: 'background.default',
        }}
      />
      <Box
        sx={{
          backgroundColor: 'background.default',
          fontSize: '36px',
          fontFamily: 'Sofia Sans',
          py: 2,
          color: 'text.secondary',
        }}
      >
        Some of my projects!
      </Box>
      <Box
        sx={{
          bgcolor: 'background.default',
        }}
      >
        <Divider variant="middle" />
      </Box>
      {!projects && (
        <Box
          sx={{
            backgroundColor: 'background.default',
            fontSize: '22px',
            fontFamily: 'Sofia Sans',
            py: 5,
            color: 'text.secondary',
          }}
        >
          No projects uploaded yet to be shown.
        </Box>
      )}
      {projects && (
        <Box
          sx={{
            backgroundColor: 'background.default',
            color: 'text.secondary',
            width: '100vw',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          {projects &&
            projects?.map((project) => (
              <div data-aos="fade-up" data-aos-duration="1000" key={project.id}>
                <Tilt
                  options={{
                    max: 60,
                    scale: 1,
                    speed: 450,
                  }}
                >
                  <Card
                    onClick={() => navigate(`/portfolio/${project.id}`)}
                    sx={{
                      my: '2.5vh',
                      boxShadow:
                        'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 3px',
                      color: 'text.secondary',
                      textAlign: 'left',
                      fontFamily: 'Sofia Sans',
                      cursor: 'pointer',
                      borderRadius: '10px',
                      width: { xs: '90vw', sm: '45vw', md: '30vw' },
                      '&:hover': {
                        boxShadow:
                          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.thumbnail}
                      alt="thumbnail"
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        mx: 2,
                      }}
                    >
                      <Box
                        sx={{
                          mt: 1,
                          fontSize: '28px',
                          textAlign: 'left',
                          width: '50%',
                        }}
                      >
                        {project.title}
                      </Box>
                      <Box
                        sx={{
                          mt: 1.5,
                          display: 'grid',
                          alignItems: 'flex-end',
                          fontSize: '18px',
                          textAlign: 'right',
                          width: '50%',
                        }}
                      >
                        <Box>{project.category}</Box>
                      </Box>
                    </Box>
                    <Divider
                      variant="middle"
                      sx={{
                        my: 0.5,
                      }}
                    />
                    <Box
                      sx={{
                        width: '93%',
                        mx: 2,
                        fontSize: '15px',
                        my: 0.5,
                      }}
                    >
                      {project.date}
                    </Box>
                  </Card>
                </Tilt>
              </div>
            ))}
        </Box>
      )}
    </div>
  );
}

export default Portfolio;
