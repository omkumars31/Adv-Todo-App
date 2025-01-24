import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
    if (!isAuthenticated) {
      console.log('Redirecting to login...'); // Debugging log
      return <Navigate to="/" />;
    }
  
    return <Component />;
  }
  

export default PrivateRoute;