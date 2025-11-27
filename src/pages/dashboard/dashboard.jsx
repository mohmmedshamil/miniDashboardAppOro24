import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Sidebar from '../../components/sideBar/sideBar';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
        <Sidebar />
        <main className="dashboard__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;