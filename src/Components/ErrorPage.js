import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  useEffect(() => {
    document.title = `${error.status} ${error.statusText}`;
  });

  return (
    <div>
      <Box
        sx={{
          width: '90%',
          px: '5%',
          pb: '5%',
          pt: '10vh',
          height: 'fit-content',
          minHeight: '69vh',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.default',
          color: 'text.secondary',
        }}
      >
        <Box
          sx={{
            width: '100%',
            fontFamily: 'Sofia Sans',
            fontSize: { xs: ' 120px', sm: '160px', md: '200px' },
          }}
        >
          {error.status} {error.statusText}
          <Box
            sx={{
              width: '100%',
              fontFamily: 'Sofia Sans',
              fontSize: '32px',
            }}
          >
            {error.data}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ErrorPage;
