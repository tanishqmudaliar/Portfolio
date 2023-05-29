import React, { useEffect, useState } from 'react';
import '../App.css';
import { Box, Button, Divider, Link } from '@mui/material';
import { analytics } from '../Config/firebase';
import { logEvent } from 'firebase/analytics';

function Blog() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    fetch('https://dev.to/api/articles?username=tanishqmudaliar')
      .then((res) => res.json())
      .then((res) => {
        setArticles(res);
      });
    document.title = 'Tanishq Mudaliar | Blog';
    logEvent(analytics, 'blog_visited');
  });

  return (
    <div>
      <Box
        sx={{
          pt: '11vh',
          minHeight: '90vh',
          height: 'fit-content',
          backgroundColor: 'background.default',
          color: 'text.secondary',
          display: 'flex',
          justifyContent: 'space-evenly',
          pb: 2,
        }}
      >
        {articles &&
          articles?.map((article) => (
            <div key={article.id}>
              <Box
                sx={{
                  display: 'grid',
                  justifyContent: 'center',
                  p: '1%',
                }}
              >
                <Box
                  sx={{
                    width: { xs: '90vw', md: '60vw' },
                  }}
                >
                  <img
                    src={article.cover_image}
                    alt="Cover"
                    className="cover"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      height: 'fit-content',
                      justifyContent: 'space-between',
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 'fit-content',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: '15vw',
                          maxWidth: '50px',
                          height: '15vw',
                          maxHeight: '50px',
                        }}
                      >
                        <img
                          src={article.user.profile_image}
                          alt="Profile"
                          className="profile"
                        />
                      </Box>
                      <Link
                        underline="none"
                        href="https://dev.to/tanishqmudaliar/"
                        target="_blank"
                        rel="noopener"
                        sx={{
                          textAlign: 'left',
                          fontFamily: 'Sofia Sans',
                          pl: 1,
                          fontSize: '16px',
                          color: 'text.secondary',
                        }}
                      >
                        {article.user.name}
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        width: 'fit-content',
                        display: 'grid',
                        alignItems: 'center',
                        textAlign: 'right',
                        fontFamily: 'Sofia Sans',
                        fontSize: '16px',
                      }}
                    >
                      Published on {article.readable_publish_date}
                      <Divider
                        sx={{
                          my: 0.5,
                        }}
                      />
                      Reading time {article.reading_time_minutes} minutes
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      fontFamily: 'Sofia Sans',
                      fontSize: { xs: '52px', sm: '70px' },
                      fontWeight: 600,
                      textAlign: 'left',
                      px: 1,
                    }}
                  >
                    {article.title}
                  </Box>
                  <Box
                    sx={{
                      my: 1,
                      display: 'flex',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'background.footer',
                        width: 'fit-content',
                        p: 1,
                        borderRadius: '5px',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        m: 1,
                      }}
                    >
                      #{article.tag_list[0]}
                    </Box>
                    <Box
                      sx={{
                        bgcolor: 'background.footer',
                        width: 'fit-content',
                        p: 1,
                        borderRadius: '5px',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        m: 1,
                      }}
                    >
                      #{article.tag_list[1]}
                    </Box>
                    <Box
                      sx={{
                        bgcolor: 'background.footer',
                        width: 'fit-content',
                        p: 1,
                        borderRadius: '5px',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        m: 1,
                      }}
                    >
                      #{article.tag_list[2]}
                    </Box>
                    <Box
                      sx={{
                        bgcolor: 'background.footer',
                        width: 'fit-content',
                        p: 1,
                        borderRadius: '5px',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        m: 1,
                      }}
                    >
                      #{article.tag_list[3]}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      py: 2,
                      textAlign: 'left',
                      fontFamily: 'Sofia Sans',
                      fontSize: '36px',
                    }}
                  >
                    {article.description}
                    <br />
                    <Button
                      onClick={() => {
                        logEvent(analytics, `blog_visted[${article.title}]`);
                      }}
                      href={article.canonical_url}
                      target="_blank"
                      rel="noopener"
                      variant="outlined"
                      sx={{
                        borderColor: 'text.secondary',
                        color: 'text.secondary',
                        '&:hover': {
                          borderColor: '#ffb300',
                          color: '#ffb300',
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Divider />
            </div>
          ))}
      </Box>
    </div>
  );
}

export default Blog;
