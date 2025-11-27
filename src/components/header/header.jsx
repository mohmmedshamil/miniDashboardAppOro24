import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlices';
import './header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('orotoken');
  };

  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">ORO24 Dashboard</h1>
        <div className="header__actions">
          <span className="header__user">Welcome, {user?.email || 'User'}</span>
          <button className="header__logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;