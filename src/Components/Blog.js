import React, { useEffect, useState } from 'react';
import '../App.css';
import { Box, Divider, Link } from '@mui/material';

let x;

function Blog() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    fetch('https://dev.to/api/articles?username=tanishqmudaliar')
      .then((res) => res.json())
      .then((res) => {
        setArticles(res);
      });
  });

  console.log(articles);

  return (
    <div>
      <Box
        sx={{
          pt: '11vh',
          minHeight: '90vh',
          height: 'fit-content',
          backgroundColor: 'background.default',
          color: 'text.secondary',
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
                    width: '70vw',
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
                          width: '50px',
                          height: '50px',
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
                      Reading time {article.reading_time_minutes} minutes
                      <Divider />
                      Published on {article.readable_publish_date}
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      fontFamily: 'Sofia Sans',
                      fontSize: '70px',
                      fontWeight: 600,
                      textAlign: 'left',
                      px: 1,
                    }}
                  >
                    {article.title}
                  </Box>
                </Box>
              </Box>
            </div>
          ))}
      </Box>
    </div>
  );
}

export default Blog;
