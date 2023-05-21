import { Box } from '@mui/material';
import React from 'react';
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
  
    return (
      <div>
        <Box
          sx={{
            mt: '10vh',
            height: '76vh',
            width: '100vw',
            backgroundColor: 'background.default',
            color: 'text.secondary',
          }}
        >
          <Box
            sx={{
              pt: '15vh',
              fontFamily: 'Sofia Sans',
              fontSize: '200px',
            }}
          >
            {error.status} {error.statusText}
          </Box>
          <Box
            sx={{
              fontFamily: 'Sofia Sans',
              fontSize: '30px',
            }}
          >
            {error.data}
          </Box>
        </Box>
      </div>
    );
}

export default ErrorPage