import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './navBar.module.css';
import icon from '../../assets/argentBankLogo.png';
import { logoutUser } from '../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const NavBar = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  const signIn = (
    <NavLink to={'/login'} className={style.mainNavItem}>
      <i className="fa fa-user-circle" />
      <button class="sign-in-button">Sign In</button>
    </NavLink>
  );
  const signOut = (
    <NavLink to={'/login'} className={style.mainNavItem}>
      <i className="fa-sharp fa-light fa-arrow-right-from-bracket" />
      <button
        class="sign-out-button"
        onClick={() => {
          dispatch(logoutUser(null));
        }}
      >
        Log out
      </button>
    </NavLink>
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
