import React from 'react';
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.status}</p>
        <p>{error.statusText || error.message}</p>
        <p>{error.data}</p>
      </div>
    );
}

export default ErrorPage