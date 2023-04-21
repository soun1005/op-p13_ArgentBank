import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './navBar.module.css';
import icon from '../../assets/argentBankLogo.png';

const NavBar = () => {
  return (
    <nav className={style.mainNav}>
      <NavLink to={'/'} className={style.mainNavLogo}>
        <img
          className={style.mainNavLogoImage}
          //   class="main-nav-logo-image"
          src={icon}
          alt="Argent Bank Logo"
        />
        <h1 className="srOnly">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to={'/login'} className={style.mainNavItem}>
          <i className={'fa fa-user-circle'} />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
