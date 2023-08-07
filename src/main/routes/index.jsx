import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

const Home = lazy(() => import('modules/Home'));
const Dashboard = lazy(() => import('modules/Dashboard'));

const PublicRoutes = ({ isLoggedIn }) => {
  const location = useLocation();
  const { from } = location.state || { from: null };

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn && from ? <Navigate to={from} /> : <Home />}
      />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    isLoggedIn: auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(PublicRoutes);
