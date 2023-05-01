// import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const token = localStorage.getItem('token');
  // const auth = useSelector((state) => state.auth);
  // const [isAuthenticated, setIsAuthenticated] = useState(null);
  // useEffect(() => {
  //   // let token = auth.token;
  //   if (token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, [token]);

  // if (isAuthenticated === null) {
  //   return <></>;
  // }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
