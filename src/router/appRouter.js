import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Users from '../pages/users/users';
import UserDetails from '../pages/userDetails/userDetails';

const Login = React.lazy(() => import('../pages/login/login'));
const Dashboard = React.lazy(() => import('../pages/dashboard/dashboard'));

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return !token ? children : <Navigate to="/dashboard" replace />;
};

const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        >
          <Route index element={<div>Welcome to Dashboard</div>} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route 
          path="/users/:id" 
          element={
            <ProtectedRoute>
              <UserDetails />
            </ProtectedRoute>
          } 
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;