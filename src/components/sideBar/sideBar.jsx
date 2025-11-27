import React from 'react';
import { NavLink } from 'react-router-dom';
import './sideBar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink 
              to="/dashboard/users" 
              className={({ isActive }) => 
                `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;