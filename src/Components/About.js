import React, { useEffect } from 'react';
import AOS from 'aos';
import { Pie } from 'react-chartjs-2';
import { Box, Divider, Link } from '@mui/material';
import { technologies, technologies1, labels, data } from '../Constants';
import profile from '../Assets/profile.png';
import profile1 from '../Assets/profile1.png';
import anime from '../Assets/anime.png';
import BallCanvas from '../Canvas/BallCanvas';
import 'aos/dist/aos.css';
import '../App.css';
import 'chart.js/auto';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Config/firebase';

function About() {
  useEffect(() => {
    AOS.init();
    document.title = 'Tanishq Mudaliar | About';
    logEvent(analytics, 'about_visited');
  }, []);

  return (
    <div>
      <Box
        sx={{
          bgcolor: 'background.default',
          display: { sm: 'grid', md: 'flex' },
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 'max-content',
          minHeight: '95vh',
          pt: { xs: '10vh', sm: '13vh', md: '15vh', lg: '5vh' },
        }}
      >
        <Box
          data-aos="zoom-in-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          sx={{
            px: '5%',
            fontFamily: 'Sofia Sans',
            fontSize: '68px',
            display: 'flexbox',
            width: 'fit-content',
            textAlign: 'left',
            color: '#ffb300',
          }}
        >
          About me!
          <Box
            sx={{
              fontSize: { xs: '32px', sm: '44px' },
              width: 'fit-content',
              maxWidth: { md: '450px', lg: '550px' },
              color: 'text.secondary',
            }}
          >
            I'm a front-end developer with an intermediate knowledge of
            electronics based in Mumbai, India.
            <Box
              sx={{
                mt: 2,
                fontSize: '22px',
                width: 'fit-content',
                color: 'text.secondary',
              }}
            >
              I'm a student at Vidyalankar Polytechnic, currently pursuing
              diploma in electronics and telecommunication. Since 2018, I've
              enjoyed finding solutions to casual day-to-day problems with the
              help of the knowledge I possess. When I'm not banging my head on
              my keyboard trying to solve the error, you'll find me cooking,
              cycling, or Netflixing on my bed while eating pasta.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '80vw', sm: '60vw', md: '55vh' },
            height: { xs: '80vw', sm: '60vw', md: '55vh' },
            ml: { xs: '10vw', sm: '20vw', md: 0 },
            py: { xs: '35px', sm: '50px', md: 0 },
          }}
        >
          <img
            src={profile}
            data-aos="zoom-in-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            alt="Tanishq Mudaliar"
            className="profile"
          />
        </Box>
      </Box>
      <Divider
        sx={{
          backgroundColor: 'background.default',
        }}
      />
      <Box
        sx={{
          bgcolor: 'background.default',
          display: { xs: 'grid', sm: 'grid', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          height: 'max-content',
          minHeight: '90vh',
        }}
      >
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            width: { xs: '90vw', md: '30vw' },
            textAlign: 'left',
            color: 'text.secondary',
            fontFamily: 'Sofia Sans',
            fontSize: '22px',
            py: '20px',
          }}
        >
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              fontSize: '44px',
              mb: '20px',
            }}
          >
            Part Coder
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '45vw 45vw',
                sm: '30vw 30vw 30vw',
                md: 'none',
              },
            }}
          >
            {technologies.map((software, tech) => (
              <div key={tech}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '5vw',
                      minWidth: '50px',
                      height: '5vw',
                      minHeight: '50px',
                    }}
                  >
                    <BallCanvas icon={software.icon} />
                  </Box>
                  <Box
                    sx={{
                      alignItems: 'center',
                      ml: 2,
                    }}
                  >
                    {software.name}
                  </Box>
                </Box>
              </div>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '80vw', sm: '60vw', md: '55vh' },
            height: { xs: '80vw', sm: '60vw', md: '55vh' },
            mx: { xs: '5vw', sm: '15vw', md: 0 },
            py: { xs: '35px', sm: '50px', md: 0 },
          }}
        >
          <img
            src={profile1}
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="Tanishq Mudaliar"
            className="profile"
          />
        </Box>
        <Box
          data-aos="fade-down"
          data-aos-duration="1000"
          sx={{
            width: { xs: '90vw', md: '30vw' },
            textAlign: 'right',
            color: 'text.secondary',
            fontFamily: 'Sofia Sans',
            fontSize: '22px',
            py: '20px',
          }}
        >
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'right' },
              fontSize: '44px',
              mb: '20px',
            }}
          >
            Part Engineer
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '90vw', sm: '40vw 40vw', md: 'none' },
              mr: { xs: '5vw', sm: '0px' },
            }}
          >
            {technologies1.map((hardware, tech1) => (
              <div key={tech1}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box
                    sx={{
                      alignItems: 'center',
                      mr: 2,
                    }}
                  >
                    {hardware.name}
                  </Box>
                  <Box
                    sx={{
                      width: '5vw',
                      minWidth: '50px',
                      height: '5vw',
                      minHeight: '50px',
                    }}
                  >
                    <BallCanvas icon={hardware.icon} />
                  </Box>
                </Box>
              </div>
            ))}
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          backgroundColor: 'background.default',
        }}
      />
      <Box
        sx={{
          display: { xs: 'grid', sm: 'grid', md: 'flex' },
          justifyContent: 'space-evenly',
          alignItems: 'center',
          bgcolor: 'background.default',
          height: 'fit-content',
          minHeight: { md: '90vh' },
          color: 'text.secondary',
          py: '25px',
        }}
      >
        <Box
          sx={{
            width: { xs: '90vw', sm: '80vw', md: '45vw' },
            mx: { xs: '5vw', sm: '10vw', md: '0px' },
          }}
        >
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            src={anime}
            alt="anime"
            className="cover"
          />
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            width: 'fit-content',
            fontFamily: 'Sofia Sans',
            fontSize: '44px',
            textAlign: { xs: 'center', md: 'left' },
            p: '20px',
          }}
        >
          Random Facts
          <Box
            sx={{
              fontSize: '22px',
              textAlign: 'left',
            }}
          >
            <ul>
              <li>I drink a lot of coffee (caffeine addict you could say).</li>
              <li>Watching anime and gaming with my homies is my zen time.</li>
              <li>My favourite anime is "Demon Slayer | Kimetsu No Yaiba".</li>
              <li>I listen to music a lot.</li>
              <li>I'm into astronomy and astrophysics.</li>
              <li>My hobbies are cycling, swimming and playing chess.</li>
              <li>I love to cook (and eat).</li>
              <li>
                I'm slightly addicted to
                <Link
                  href="https://instagram.com/tanishq_mudaliar"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  sx={{
                    ml: 0.5,
                  }}
                >
                  Instagram
                </Link>
                .
              </li>
              <li>
                Fav Quote: "To win your dream is to destroy someone else's"
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          backgroundColor: 'background.default',
        }}
      />
      <Box
        sx={{
          display: { xs: 'grid', sm: 'grid', md: 'flex' },
          justifyContent: 'space-evenly',
          alignItems: 'center',
          bgcolor: 'background.default',
          height: 'fit-content',
          minHeight: { md: '90vh' },
          color: 'text.secondary',
          py: '25px',
          width: '100vw',
        }}
      >
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            display: 'grid',
            justifyContent: 'center',
            fontFamily: 'Sofia Sans',
            width: { xs: '90vw', md: '45vw' },
            mx: { xs: '5vw', md: '0px' },
            fontSize: '44px',
            textAlign: 'left',
          }}
        >
          My Skills
          <Box
            sx={{
              fontSize: '22px',
              textAlign: 'left',
            }}
          >
            {labels.map((label, title) => (
              <ul key={title}>
                <li>{label.name}</li>
              </ul>
            ))}
          </Box>
        </Box>
        <Box
          data-aos="fade-down"
          data-aos-duration="1000"
          sx={{
            width: { xs: '90vw', md: '35vw' },
            mx: { xs: '5vw', md: '0px' },
          }}
        >
          <Pie data={data} />
        </Box>
      </Box>
    </div>
  );
}

export default About;
