import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './navBar.module.css';
import icon from '../../assets/argentBankLogo.png';
import { logoutUser } from '../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  const signIn = (
    <NavLink to={'/login'} className={style.mainNavItem}>
      <i className="fa fa-user-circle" />
      <button className={style.signInButton}>Sign In</button>
    </NavLink>
  );
  const signOut = (
    <>
      <NavLink to={'/profile'}>
        <i className="fa fa-user-circle-o" aria-hidden="true">
          <span className={style.profileName}>{profile.firstName}</span>
        </i>
      </NavLink>
      <NavLink
        to={'/login'}
        className={style.mainNavItem}
        onClick={() => {
          dispatch(logoutUser(null));
        }}
      >
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <button className={style.signOutButton}>Sign out</button>
      </NavLink>
    </>
  );

  return (
    <nav className={style.mainNav}>
      <NavLink to={'/'} className={style.mainNavLogo}>
        <img
          className={style.mainNavLogoImage}
          src={icon}
          alt="Argent Bank Logo"
        />
        <h1 className="srOnly">Argent Bank</h1>
      </NavLink>
      <div>{auth.token ? signOut : signIn}</div>
    </nav>
  );
};

export default NavBar;
