import React, { useEffect, useState } from 'react';
import { Box, Divider, IconButton, Tooltip } from '@mui/material';
import { useParams } from 'react-router-dom';
import { analytics, db } from '../Config/firebase.js';
import { onSnapshot, doc, collection } from 'firebase/firestore';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import { logEvent } from 'firebase/analytics';

function DetailedPortfolio() {
  const { id } = useParams();
  const [document, setDocument] = useState('');
  const [steps, setSteps] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ref = doc(db, `portfolio/${id}`);
    onSnapshot(ref, (snapshot) => {
      setDocument({ ...snapshot.data() });
    });
    onSnapshot(collection(db, `portfolio/${id}/Steps`), (snapshot) =>
      setSteps(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    logEvent(analytics, `portfolio_visited[${id}]`);
  });

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
          pt: { xs: '6.5vh', md: '10vh', lg: '10vh' },
          color: 'text.secondary',
        }}
      >
        <Box
          sx={{
            width: { xs: '90vw', md: '40vw' },
            fontFamily: 'Sofia Sans',
            fontSize: '56px',
            textAlign: 'left',
          }}
        >
          {document.subTitle}
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Box
              sx={{
                fontSize: '22px',
                width: '50%',
                textAlign: 'left',
                fontWeight: '200',
              }}
            >
              {document.title}
            </Box>
            <Box
              sx={{
                fontSize: '22px',
                width: '50%',
                textAlign: 'right',
                fontWeight: '200',
              }}
            >
              {document.date}
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: '22px',
              fontWeight: '200',
              mt: 5,
            }}
          >
            {document.subContent}
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{
              fontSize: '22px',
              fontWeight: 200,
            }}
          >
            Links
            <Tooltip title="Github">
              <IconButton
                href="https://github.com/tanishqmudaliar/VP-Hackathon"
                target="_blank"
                rel="noopener"
                sx={{
                  ml: 1,
                }}
              >
                <GitHubIcon
                  sx={{
                    fontSize: '40px',
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Website">
              <IconButton
                href="https://vp-techshala.web.app"
                target="_blank"
                rel="noopener"
                sx={{
                  ml: 1,
                }}
              >
                <PublicIcon
                  sx={{
                    fontSize: '40px',
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            py: '15px',
            width: { xs: '90vw', md: '50vw' },
          }}
        >
          <img className="thumbnail" src={document.thumbnail} alt="thumbnail" />
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
          p: '15px',
        }}
      >
        <img
          className="content1"
          src={document.maincontentimage}
          alt="content"
        />
      </Box>
      <Divider
        sx={{
          backgroundColor: 'background.default',
        }}
      />
      {steps &&
        steps?.map((step) => (
          <div key={step.id}>
            <Box
              sx={{
                height: 'fit-content',
                backgroundColor: 'background.default',
                color: 'text.secondary',
                display: 'grid',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  fontFamily: 'Sofia Sans',
                  width: 'fit-content',
                  textAlign: 'left',
                  p: '5vh',
                }}
              >
                <Box
                  sx={{
                    fontSize: '56px',
                    mb: '20px',
                  }}
                >
                  {step.title}
                </Box>
                <Box
                  sx={{
                    fontSize: '22px',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: step.content,
                  }}
                />
              </Box>
            </Box>
          </div>
        ))}
    </div>
  );
}

export default DetailedPortfolio;
