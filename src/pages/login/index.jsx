import { NavLink } from 'react-router-dom';
import Footer from '../../layout/footer';
import NavBar from '../../layout/navBar';
import style from './Login.module.css';

const Login = () => {
  return (
    <body>
      <NavBar />
      <main className="main bgDark">
        <section className={style.signInContent}>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className={style.inputWrapper}>
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className={style.inputWrapper}>
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className={style.inputRemember}>
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <NavLink to="/user" className={style.signInButton}>
              Sign In
            </NavLink>
          </form>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default Login;
