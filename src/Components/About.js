import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import 'chart.js/auto';
import { Box, Divider, Link } from '@mui/material';
import { Pie } from "react-chartjs-2";
import profile from '../Assets/profile.png';
import profile1 from '../Assets/profile1.png';
import anime from '../Assets/anime.png';

export const data = {
  labels: ['Binge watching a series', 'Designing websites', 'PCB Designing', 'Working on circuits', 'Drinking Coffee'],
  datasets: [
    {
      label: 'Time spent %',
      data: [25, 30, 15, 25, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function About() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
        <Box
          sx={{
            marginTop: '8vh',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            bgcolor: 'background.default',
            minHeight: '91vh',
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
          >
          <Box
            sx={{
              textAlign: 'left',
              width: '40vw',
              fontSize: '6.583vw',
              fontFamily: 'Sofia Sans',
              color: '#ffb300',
            }}
          >
            About me!
            <Box
              sx={{
                fontSize: '2.37vw',
                width: '30vw',
                color: 'text.secondary',
              }}
            >
              I'm a front-end developer with an intermediate knowledge of electronics based in Mumbai, India.
            </Box>
            <Box
              sx={{
                mt: 2,
                fontSize: '1.185vw',
                width: '30vw',
                color: 'text.secondary',
              }}
            >
              I'm a student at Vidyalankar Polytechnic, currently pursuing by diploma for electronics and telecommunication.
              Since 2018, I've enjoyed finding solutions to casual day-to-day problems with the help of the knowledge I possess.
              When I'm not banging my head on my keyboard trying to find the solution, you'll find me cooking, cycling, or Netflixing on my bed while eating pasta.
            </Box>
          </Box>
          </div>
          <img
            src={profile}
            data-aos="fade-left"
            data-aos-duration="1000"
            alt="Tanishq Mudaliar"
            className='profile_a'
          />
        </Box>
        <Divider
          sx={{
            backgroundColor: 'background.default',
          }}
        />
        <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              bgcolor: 'background.default',
              minHeight: '90vh',
              color: 'text.secondary',
            }}
        >
          <Box
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            sx={{
              width: '25vw',
              fontFamily: 'Sofia Sans',
              fontSize: '2.897vw',
              textAlign: 'left',
            }}
          >
            Part Coder
            <Box
              sx={{
                mt: 2,
                fontSize: '1.448vw',
              }}
            >
              <ul>
                <li>UI/UX design</li>
                <li>HTML, Javascript (React JS)</li>
                <li>C Progamming and Assembly Language</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>"Swearing at my computer"</li>
              </ul>
            </Box>
          </Box>
          <img
            src={profile1}
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt="Tanishq Mudaliar"
            className='profile'
          />
          <Box
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            sx={{
              width: '25vw',
              fontFamily: 'Sofia Sans',
              fontSize: '2.897vw',
              textAlign: 'right',
            }}
          >
            Part Engineer
            <Box
              sx={{
                mt: 2,
                fontSize: '1.448vw',
                direction: 'rtl'
              }}
            >
              <ul>
                <li>PCB Designing</li>
                <li>Microcontrollers(8051,Arduino,ESP modules)</li>
                <li>Circuit Designing</li>
                <li>"Making it look alive"</li>
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
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              bgcolor: 'background.default',
              minHeight: '90vh',
              color: 'text.secondary',
            }}
        >
          <img
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            src={anime}
            alt="anime"
            className='anime'
          />
          <Box
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            sx={{
              width: '35vw',
              fontFamily: 'Sofia Sans',
              fontSize: '2.897vw',
              textAlign: 'left',
            }}
          >
            Random Facts
            <Box
              sx={{
                fontSize: '1.448vw',
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
                <li>I'm slightly addicted to
                  <Link
                    href='https://instagram.com/tanishq_mudaliar'
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                    sx={{
                      ml: 0.5,
                    }}
                  >
                    Instagram
                  </Link>.
                </li>
                <li>Fav Quote: "Set your heart ablaze, go beyond your limits!" ~Kyojuro Rengoku</li>
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
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              bgcolor: 'background.default',
              minHeight: '90vh',
              color: 'text.secondary',
            }}
        >
          <Box
            data-aos="zoom-in"
            data-aos-duration="1000"
            sx={{
              fontFamily: 'Sofia Sans',
              width: '30vw',
              fontSize: '2.897vw',
              textAlign: 'left',
            }}
          >
            My Skills
            <Box
              sx={{
                fontSize: '1.448vw',
                textAlign: 'left',
              }}
            >
              <ul>
                <li>Binge watching a series</li>
                <li>Designing websites</li>
                <li>PCB Designing</li>
                <li>Working on circuits</li>
                <li>Drinking coffee</li>
              </ul>
            </Box>
          </Box>
          <Box
            data-aos="zoom-out"
            data-aos-duration="1000"
            sx={{
              width: '30vw',
            }}
          >
            <Pie
              data={data}
            />
          </Box>
        </Box>
    </div>
  )
}

export default About