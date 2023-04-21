import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './navBar.module.css';
// import Main from '../../pages/main';
// import Login from '../../pages/login';

const NavBar = () => {
  return (
    <nav className={style.mainNav}>
      <NavLink to={'/'} className={style.mainNavLogo}>
        <img
          //   class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className={style.srOnly}>Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to={'/login'} className={style.mainNavItem}>
          {/* <i class="fa fa-user-circle"></i> */}
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
