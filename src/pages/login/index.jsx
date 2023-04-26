import { NavLink } from 'react-router-dom';
import Footer from '../../layout/footer';
import NavBar from '../../layout/navBar';
import style from './Login.module.css';
import { useSelector } from 'react-redux';
// import { useState } from 'react';

const Login = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  return (
    <>
      <NavBar />
      <main className="main bgDark">
        <section className={style.signInContent}>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className={style.inputWrapper}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                // onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={style.inputRemember}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <NavLink to="/user" className={style.signInButton}>
              Sign In
            </NavLink>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
